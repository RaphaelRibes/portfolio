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

    // Récupérer le slug de la conférence depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (slug && typeof translations !== 'undefined') {
        renderConference(currentLang, slug);
    }

    // --- Gestionnaires d'événements ---

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
        });
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'fr' : 'en';
            applyLanguage(currentLang);
            if (slug && typeof translations !== 'undefined') {
                renderConference(currentLang, slug);
            }
        });
    }

    // --- Fonctions Principales ---

    /**
     * Convert simple markdown syntax to HTML
     * Supports: **bold**, newlines
     */
    function simpleMarkdownToHtml(text) {
        if (!text) return '';
        // Convert **bold** to <strong>bold</strong>
        let html = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        // Convert newlines to <br>
        html = html.replace(/\n/g, '<br>');
        return html;
    }

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        const icon = themeToggle ? themeToggle.querySelector('i') : null;
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    function applyLanguage(lang) {
        if (langToggle) langToggle.textContent = lang.toUpperCase();
        localStorage.setItem('lang', lang);

        // Mise à jour du texte "Back to Conferences"
        const backSpan = document.querySelector('[data-i18n-back-en]');
        if (backSpan) {
            backSpan.textContent = lang === 'fr'
                ? backSpan.getAttribute('data-i18n-back-fr')
                : backSpan.getAttribute('data-i18n-back-en');
        }

        // Mise à jour des liens de navigation
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let val = translations[lang];
            keys.forEach(k => val = val ? val[k] : null);
            if (val) el.textContent = val;
        });
    }

    function renderConference(lang, conferenceSlug) {
        const container = document.getElementById('conference-content');
        if (!container) return;

        const t = translations[lang];
        if (!t || !t.conferences || !t.conferences.items) {
            container.innerHTML = '<p>Conference not found.</p>';
            return;
        }

        // Trouver la conférence par son slug
        const conference = t.conferences.items.find(item => item.slug === conferenceSlug);

        if (!conference) {
            container.innerHTML = `<p>${lang === 'fr' ? 'Conférence non trouvée.' : 'Conference not found.'}</p>`;
            return;
        }

        // Mise à jour du titre de la page
        document.title = `${conference.title} - Raphaël Ribes`;

        // Génération du contenu
        container.innerHTML = `
            <header class="conference-header">
                <div class="conference-meta">
                    <span class="conference-date"><i class="fas fa-calendar-alt"></i> ${conference.date}</span>
                    <span class="conference-location"><i class="fas fa-map-marker-alt"></i> ${conference.location}</span>
                </div>
                <h1 class="conference-title">${conference.title}</h1>
            </header>

            <div class="conference-body">
                <p class="conference-description">${simpleMarkdownToHtml(conference.fullDescription || conference.description)}</p>

                ${conference.video ? `
                <div class="conference-video">
                    <h2><i class="fas fa-video"></i> ${lang === 'fr' ? 'Vidéo de la conférence' : 'Conference Recording'}</h2>
                    <div class="video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/${conference.video}" 
                            title="${conference.title}"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                ` : ''}

                <div class="conference-resources">
                    <h2><i class="fas fa-link"></i> ${lang === 'fr' ? 'Ressources' : 'Resources'}</h2>
                    <div class="resource-links">
                        ${conference.url ? `
                        <a href="${conference.url}" target="_blank" class="resource-link">
                            <i class="fab fa-gitlab"></i>
                            ${lang === 'fr' ? 'Voir les slides et ressources' : 'View slides and resources'}
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        ` : ''}
                        ${conference.video ? `
                        <a href="https://www.youtube.com/watch?v=${conference.video}" target="_blank" class="resource-link">
                            <i class="fab fa-youtube"></i>
                            ${lang === 'fr' ? 'Regarder sur YouTube' : 'Watch on YouTube'}
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
});
