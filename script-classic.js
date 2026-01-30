document.addEventListener('DOMContentLoaded', () => {
    // --- Initialisation ---
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const html = document.documentElement;

    // Charger les préférences depuis le stockage local
    let currentLang = localStorage.getItem('lang') || 'en';
    let currentTheme = localStorage.getItem('theme') || 'dark';

    // Appliquer les préférences au démarrage
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    // Vérifier si le fichier de données est chargé
    if (typeof translations !== 'undefined') {
        renderContent(currentLang);
    }

    // --- Gestionnaires d'événements ---

    // Basculer le thème (Clair / Sombre)
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
        });
    }

    // Basculer la langue (EN / FR)
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'fr' : 'en';
            applyLanguage(currentLang);
            if (typeof translations !== 'undefined') renderContent(currentLang);
        });
    }

    // --- Fonctions Principales ---

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        const icon = themeToggle ? themeToggle.querySelector('i') : null;
        if (icon) {
            // Change l'icône : Soleil pour sombre (pour passer à clair), Lune pour clair
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    function applyLanguage(lang) {
        if (langToggle) langToggle.textContent = lang.toUpperCase();
        localStorage.setItem('lang', lang);
    }

    function renderContent(lang) {
        const t = translations[lang];
        if (!t) return;

        // 1. Rendu des textes simples (titres, menus, bio)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let val = t;
            keys.forEach(k => val = val ? val[k] : null);
            if (val) el.textContent = val;
        });

        // 2. Rendu des listes chronologiques (Expérience, Education, etc.)
        ['experience', 'education', 'volunteering', 'conferences'].forEach(sec => {
            if (t[sec]) renderTimeline(sec + '-list', t[sec].items);
        });

        // 3. GESTION DU MENU DÉROULANT CONFÉRENCES
        if (t.conferences && t.conferences.items) {
            const dropdownContainer = document.getElementById('conf-dropdown-menu');
            if (dropdownContainer) {
                dropdownContainer.innerHTML = t.conferences.items.map((item, index) => {
                    // Crée un lien vers l'ancre générée dans renderTimeline (conferences-list-item-X)
                    return `<a href="#conferences-list-item-${index}">${item.title}</a>`;
                }).join('');
            }
        }

        // 3.5 GESTION DU MENU DÉROULANT PROJETS
        if (t.projects && t.projects.items) {
            const projectsDropdown = document.getElementById('projects-dropdown-menu');
            if (projectsDropdown) {
                projectsDropdown.innerHTML = t.projects.items.map((item, index) => {
                    return `<a href="#projects-list-item-${index}">${item.title}</a>`;
                }).join('');
            }
        }

        // 4. Rendu des compétences (Style Cartes Modernes)
        if (t.skills) {
            renderSkillsCards(t.skills);
        }

        // 5. Rendu des projets
        if (t.projects) {
            renderProjects(t.projects.items);
        }

        // 6. Mise à jour des liens sociaux
        if (t.contact) {
            updateLink('linkedin-link', t.contact.linkedin_url);
            updateLink('github-link', "https://github.com/" + t.contact.github);
            updateLink('gitlab-link', t.contact.gitlab_url);
            updateLink('email-link', "mailto:" + t.contact.email);
            updateLink('cv-link', t.contact.cv_url);
        }
    }

    // --- Fonctions Utilitaires ---

    function updateLink(id, url) {
        const el = document.getElementById(id);
        if (el && url) el.href = url;
    }

    function renderTimeline(id, items) {
        const container = document.getElementById(id);
        if (!container) return;

        // Detect if this is the conferences section
        const isConferences = id === 'conferences-list';

        container.innerHTML = items.map((item, index) => {
            // Génération du bloc vidéo uniquement si ce n'est PAS les conférences
            let videoHTML = '';
            if (!isConferences && item.image && item.video) {
                videoHTML = `
                    <div class="timeline-video-container">
                        <a href="https://www.youtube.com/watch?v=${item.video}" target="_blank" class="video-link">
                            <img src="${item.image}" alt="${item.title}" class="video-thumbnail">
                            <div class="play-overlay">
                                <i class="fas fa-play-circle"></i>
                            </div>
                        </a>
                    </div>
                `;
            }

            // Génération du HTML pour les logos
            let logoHTML = '';
            if (item.logos && item.logos.length > 0) {
                const logos = item.logos.map(logoUrl => `<img src="${logoUrl}" alt="Logo" class="timeline-logo-small">`).join('');
                logoHTML = `<div class="timeline-logos-container">${logos}</div>`;
            } else if (item.logo) {
                logoHTML = `<img src="${item.logo}" alt="Logo" class="timeline-logo">`;
            }

            // Pour les conférences, le lien pointe vers la page de détail
            let linkHTML = '';
            if (isConferences && item.slug) {
                linkHTML = `
                    <a href="conference.html?slug=${item.slug}" class="timeline-link">
                        View details <i class="fas fa-arrow-right"></i>
                    </a>`;
            } else if (item.url) {
                linkHTML = `
                    <a href="${item.url}" target="_blank" class="timeline-link">
                        View details <i class="fas fa-arrow-right"></i>
                    </a>`;
            }

            // Ajout de l'ID unique sur la div principale : id="${id}-item-${index}"
            return `
            <div class="timeline-item" id="${id}-item-${index}">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${item.date}</span>
                    <h3>${item.title}</h3>
                    
                    ${logoHTML}

                    ${item.location ? `
                    <div class="timeline-location">
                        <i class="fas fa-map-marker-alt"></i> ${item.location}
                    </div>` : ''}
                    
                    <p>${item.description}</p>

                    ${videoHTML}
                    
                    ${linkHTML}
                </div>
            </div>
            `;
        }).join('');
    }

    function renderSkillsCards(skillsData) {
        const container = document.getElementById('skills-network');
        if (!container) return;

        container.innerHTML = '';
        container.className = 'skills-grid-container';

        // --- CONFIGURATION À 3 COLONNES ---
        const categories = [
            {
                title: 'Technical Stack',
                items: skillsData.tech.split(','),
                icon: 'fa-code',
                color: 'blue'
            },
            {
                title: 'Transversal Skills',
                items: skillsData.soft ? skillsData.soft.split(',') : [],
                icon: 'fa-user-astronaut',
                color: 'green'
            },
            {
                title: 'Academic Focus',
                items: skillsData.academic ? skillsData.academic.split(',') : [],
                icon: 'fa-graduation-cap',
                color: 'purple'
            }
        ];

        let htmlContent = '';

        categories.forEach(cat => {
            if (cat.items.length === 0) return;

            const pills = cat.items.map(item =>
                `<span class="skill-pill ${cat.color}">${item.trim()}</span>`
            ).join('');

            htmlContent += `
                <div class="skill-card">
                    <div class="skill-header">
                        <i class="fas ${cat.icon}"></i>
                        <h3>${cat.title}</h3>
                    </div>
                    <div class="skill-body">
                        ${pills}
                    </div>
                </div>
            `;
        });

        container.innerHTML = htmlContent;
    }

    function renderProjects(items) {
        const container = document.getElementById('projects-list');
        if (!container) return;

        container.innerHTML = items.map((project, index) => {
            // Features list
            const featuresHTML = project.features.map(f => `
                <div class="project-feature">
                    <i class="fas ${f.icon}"></i>
                    <div class="feature-content">
                        <span class="feature-title">${f.text}</span>
                        <span class="feature-detail">${f.detail}</span>
                    </div>
                </div>
            `).join('');

            // Tech tags
            const techHTML = project.tech.map(t =>
                `<span class="project-tech-tag">${t}</span>`
            ).join('');

            return `
                <div class="project-card" id="projects-list-item-${index}">
                    <div class="project-header">
                        <div class="project-icon">
                            <i class="fas fa-cube"></i>
                        </div>
                        <div>
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-subtitle">${project.subtitle}</p>
                        </div>
                    </div>
                    
                    <p class="project-description">${project.description}</p>
                    
                    <div class="project-features">
                        ${featuresHTML}
                    </div>

                    <div class="project-tech-tags">
                        ${techHTML}
                    </div>

                    <div class="project-links">
                        <a href="${project.github_url}" target="_blank" class="project-link github">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="${project.prefix_url}" target="_blank" class="project-link prefix">
                            <i class="fas fa-box"></i> prefix.dev
                        </a>
                        <a href="${project.pixi_url}" target="_blank" class="project-link pixi">
                            <i class="fas fa-external-link-alt"></i> Pixi Docs
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    // --- GESTION DU BOUTON "BACK TO TOP" (NOUVEAU) ---
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        // 1. Détection du scroll pour afficher/cacher le bouton
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Apparaît après 300px de descente
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        // 2. Action au clic : remonter en haut doucement
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});