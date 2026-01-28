// --- FONCTION GLOBALE POUR L'EXPLORATEUR XP ---
// Doit être en dehors de DOMContentLoaded pour être accessible via le onclick="" du HTML généré
window.switchFolder = function (el, safeKey) {
    // 1. Gestion visuelle de la sidebar (dossier sélectionné)
    document.querySelectorAll('.tree-item').forEach(item => item.classList.remove('active'));
    el.classList.add('active');

    // 2. Gestion de l'affichage du contenu (fichiers)
    document.querySelectorAll('.xp-folder-content').forEach(div => div.style.display = 'none');

    // safeKey contient déjà les tirets (ex: "Technical-Stack") grâce à la génération dans renderSkillsExplorer
    const targetFolder = document.getElementById(`folder-${safeKey}`);
    if (targetFolder) {
        targetFolder.style.display = 'flex';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DÉCLARATION DES VARIABLES ---
    const langToggle = document.getElementById('lang-toggle');
    const taskbarButtons = document.querySelectorAll('.task-button');
    const windows = document.querySelectorAll('.window');

    let highestZIndex = 100;
    let currentLang = localStorage.getItem('lang') || 'en';

    // --- 2. VÉRIFICATION DE SÉCURITÉ ---
    if (typeof translations === 'undefined') {
        console.error("Erreur critique : data.js n'est pas chargé ou contient une erreur.");
    }

    // --- 3. INITIALISATION ---
    setLanguage(currentLang);

    if (typeof translations !== 'undefined') {
        renderContent(currentLang);
    }

    // Initialisation des fenêtres et icônes (Interact.js)
    initInteract();

    // --- 4. ÉVÉNEMENTS (LISTENERS) ---

    // Correctif : Bloquer le clic sur les icônes du bureau si on les a déplacées
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            if (icon.getAttribute('data-dragged') === 'true') {
                e.preventDefault();
                e.stopPropagation();
                console.log("Clic bloqué : Déplacement détecté");
            }
        });
    });

    // --- GESTION SPÉCIFIQUE DÉMINEUR ---
    const minesweeperIcon = document.getElementById('desktop-minesweeper');
    if (minesweeperIcon) {
        minesweeperIcon.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le lien #

            // Si l'icône a été glissée, on ne fait rien
            if (minesweeperIcon.getAttribute('data-dragged') === 'true') return;

            const targetWin = document.getElementById('window-minesweeper');
            if (targetWin) {
                targetWin.classList.remove('closed');
                targetWin.style.display = 'flex';
                bringToFront(targetWin);
            }
        });
    }

    // Bouton de langue (Taskbar)
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'fr' : 'en';
            setLanguage(currentLang);
            if (typeof translations !== 'undefined') renderContent(currentLang);
        });
    }

    // Barre des tâches (Ouvrir fenêtre)
    taskbarButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-window-target');
            const targetWin = document.getElementById(targetId);

            if (targetWin) {
                targetWin.classList.remove('closed');
                targetWin.style.display = 'flex';
                bringToFront(targetWin);
            }
        });
    });

    // Boutons des fenêtres (Fermer/Minimiser)
    windows.forEach(win => {
        const closeBtn = win.querySelector('.title-bar-controls button[aria-label="Close"]');
        const minBtn = win.querySelector('.title-bar-controls button[aria-label="Minimize"]');

        const closeAction = (e) => {
            e.stopPropagation();
            win.classList.add('closed');
            win.style.display = 'none';
        };

        if (closeBtn) closeBtn.addEventListener('click', closeAction);
        if (minBtn) minBtn.addEventListener('click', closeAction);

        // Mettre au premier plan au clic sur la fenêtre
        win.addEventListener('mousedown', () => bringToFront(win));
    });

    // --- 5. FONCTIONS ---

    function initInteract() {
        if (typeof interact !== 'undefined') {
            // A. Fenêtres déplaçables
            interact('.window').draggable({
                allowFrom: '.title-bar',
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                listeners: {
                    move(event) {
                        const target = event.target;
                        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
                        target.style.transform = `translate(${x}px, ${y}px)`;
                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                    },
                    start(event) {
                        bringToFront(event.target);
                    }
                }
            });

            // B. Icônes du bureau (Magnétisme + Anti-collision)
            interact('.desktop-icon').draggable({
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: '.desktop',
                        endOnly: true
                    }),
                    interact.modifiers.snap({
                        targets: [
                            interact.createSnapGrid({
                                x: 90, y: 100, // Taille de la case grille
                                offset: { x: 10, y: 10 }
                            })
                        ],
                        range: Infinity,
                        relativePoints: [{ x: 0, y: 0 }],
                        endOnly: true
                    })
                ],
                listeners: {
                    start(event) {
                        const target = event.target;
                        // Sauvegarde position de départ
                        target.setAttribute('data-start-x', target.getAttribute('data-x') || 0);
                        target.setAttribute('data-start-y', target.getAttribute('data-y') || 0);
                    },
                    move(event) {
                        const target = event.target;
                        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                        target.style.transform = `translate(${x}px, ${y}px)`;
                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);

                        target.setAttribute('data-dragged', 'true');
                    },
                    end(event) {
                        const target = event.target;

                        // Détection collision simple
                        const targetRect = target.getBoundingClientRect();
                        let collision = false;

                        document.querySelectorAll('.desktop-icon').forEach(other => {
                            if (other === target) return;
                            const otherRect = other.getBoundingClientRect();

                            // Distance entre les centres
                            const dx = (targetRect.left + targetRect.width / 2) - (otherRect.left + otherRect.width / 2);
                            const dy = (targetRect.top + targetRect.height / 2) - (otherRect.top + otherRect.height / 2);
                            const distance = Math.sqrt(dx * dx + dy * dy);

                            if (distance < 60) collision = true;
                        });

                        if (collision) {
                            // Rebond vers la position précédente
                            const startX = target.getAttribute('data-start-x');
                            const startY = target.getAttribute('data-start-y');
                            target.style.transform = `translate(${startX}px, ${startY}px)`;
                            target.setAttribute('data-x', startX);
                            target.setAttribute('data-y', startY);
                        }

                        setTimeout(() => {
                            target.removeAttribute('data-dragged');
                        }, 50);
                    }
                }
            });
        }
    }

    function bringToFront(element) {
        highestZIndex++;
        element.style.zIndex = highestZIndex;
    }

    function setLanguage(lang) {
        if (langToggle) langToggle.textContent = lang.toUpperCase();
        localStorage.setItem('lang', lang);
    }

    function renderContent(lang) {
        const t = translations[lang];
        if (!t) return;

        // 1. Textes simples
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const path = el.getAttribute('data-i18n').split('.');
            let value = t;
            path.forEach(key => { if (value) value = value[key]; });
            if (value) el.textContent = value;
        });

        // 2. Listes chronologiques
        if (t.experience) renderTimeline('experience-list', t.experience.items);
        if (t.education) renderTimeline('education-list', t.education.items);
        if (t.volunteering) renderTimeline('volunteering-list', t.volunteering.items);
        if (t.conferences) renderTimeline('conferences-list', t.conferences.items);

        // 3. Skills (EXPLORATEUR DE FICHIERS MIS À JOUR)
        if (t.skills) {
            renderSkillsExplorer(t.skills);
        }

        // 4. Mises à jour des liens
        if (t.contact) {
            updateLink('linkedin-link', t.contact.linkedin_url);
            updateLink('github-link', "https://github.com/" + t.contact.github);
            updateLink('gitlab-link', t.contact.gitlab_url);
            updateLink('email-link', "mailto:" + t.contact.email);
            updateLink('steam-link', t.contact.steam_url);
            updateLink('desktop-cv', t.contact.cv_url);
            updateLink('desktop-linkedin', t.contact.linkedin_url);
            updateLink('desktop-github', "https://github.com/" + t.contact.github);
            updateLink('desktop-gitlab', t.contact.gitlab_url);
            updateLink('desktop-steam', t.contact.steam_url);
            updateLink('desktop-email', "mailto:" + t.contact.email);
            updateLink('desktop-cv', t.contact.cv_url);
        }
    }

    function updateLink(id, url) {
        const el = document.getElementById(id);
        if (el && url) el.href = url;
    }

    function renderTimeline(id, items) {
        const container = document.getElementById(id);
        if (!container) return;
        container.innerHTML = ''; // Clear existing content

        items.forEach(item => {
            // Generate Logo HTML
            let logoHTML = '';
            if (item.logos && item.logos.length > 0) {
                const logos = item.logos.map(url => `<img src="${url}" class="xp-timeline-logo-small" alt="Logo">`).join('');
                logoHTML = `<div class="xp-timeline-logos-container">${logos}</div>`;
            } else if (item.logo) {
                logoHTML = `<img src="${item.logo}" class="xp-timeline-logo" alt="Logo">`;
            }

            const html = `
                <div class="timeline-item">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-content">
                        ${logoHTML}
                        <h3>${item.title}</h3>
                        <div class="timeline-location">${item.location || ''}</div>
                        <p>${item.description}</p>
                        ${item.url ? `<p><a href="${item.url}" target="_blank">View details</a></p>` : ''}
                    </div>
                </div>
            `;
            container.innerHTML += html;
        });
    }

    // --- NOUVELLE FONCTION DE RENDU : EXPLORATEUR XP ---
    function renderSkillsExplorer(skillsData) {
        const container = document.getElementById('skills-network');
        if (!container) return;

        // Configuration alignée sur le mode Classic
        const categories = {
            'Technical Stack': {
                items: skillsData.tech.split(','),
                icon: 'fa-code',
                ext: '.exe'
            },
            'Transversal Skills': {
                // Utilisation de .soft pour correspondre au mode classique
                items: skillsData.soft ? skillsData.soft.split(',') : [],
                icon: 'fa-user-astronaut',
                ext: '.txt'
            },
            'Academic Focus': {
                items: skillsData.academic ? skillsData.academic.split(',') : [],
                icon: 'fa-graduation-cap',
                ext: '.pdf'
            }
        };

        // Construction du HTML
        let sidebarHTML = '<ul class="xp-tree-view">';
        let contentHTML = '';

        Object.keys(categories).forEach((catKey, index) => {
            const cat = categories[catKey];
            // Le premier dossier est actif par défaut
            const isActive = index === 0 ? 'active' : '';
            const displayStyle = index === 0 ? 'flex' : 'none';

            // Création d'une clé sûre pour les ID (ex: "Technical-Stack")
            const safeKey = catKey.replace(/\s+/g, '-');

            // Partie Sidebar (Arborescence)
            sidebarHTML += `
                <li class="tree-item ${isActive}" onclick="switchFolder(this, '${safeKey}')">
                    <i class="fas fa-folder" style="color: #EBC63B;"></i> ${catKey}
                </li>`;

            // Partie Contenu (Fichiers)
            const filesHTML = cat.items.map(item => `
                <div class="xp-file">
                    <i class="fas ${cat.icon} fa-3x" style="color: #245EDC;"></i>
                    <span class="filename">${item.trim()}${cat.ext}</span>
                </div>
            `).join('');

            contentHTML += `
                <div id="folder-${safeKey}" class="xp-folder-content" style="display: ${displayStyle};">
                    ${filesHTML}
                </div>`;
        });

        sidebarHTML += '</ul>';

        // Injection dans le conteneur
        container.innerHTML = `
            <div class="xp-explorer-container">
                <div class="xp-sidebar">
                    <div class="xp-sidebar-header">Folders</div>
                    ${sidebarHTML}
                </div>
                <div class="xp-main-view">
                    ${contentHTML}
                </div>
            </div>
        `;
    }
});