const translations = {
    "en": {
        "nav": {
            "home": "Home",
            "about": "About",
            "experience": "Experience",
            "education": "Education",
            "volunteering": "Volunteering",
            "conferences": "Scientific Mediation",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact"
        },
        "hero": {
            "title": "Raphaël Ribes",
            "subtitle": "Bioinformatics Student",
            "description": "Specialized in bioinformatics, I work at the interface of life sciences and computer science. I enjoy diving deep into complex systems to understand their inner workings, bringing a fresh perspective to the design of computational tools and the analysis of complex biological data. I am committed to fostering greater reproducibility and accessibility in science.",
            "cta": "Download CV"
        },
        "experience": {
            "title": "Experience",
            "items": [
                {
                    "date": "Feb 2026 - July 2026",
                    "title": "Internship at ISEM - ISDM",
                    "location": "ISDM, Montpellier",
                    "description": "Monitoring social microbiome in wild primates using a custom shotgun metagenomics pipeline.",
                    "logos": ["images/isem.png", "images/ISDM.png"]
                },
                {
                    "date": "April 2025 - Aug 2025",
                    "title": "Internship at INRAE-CIRAD, UMR AGAP",
                    "location": "INRAE—ARCAD, Montpellier",
                    "description": "Study of the reference genome effect on mapping quality and residual heterozygosity estimation using bioinformatics tools and pipelines.",
                    "url": "https://gitlab.etu.umontpellier.fr/rribes-m1-internship",
                    "logos": ["images/INRAE.png", "images/CIRAD.png"]
                },
                {
                    "date": "April 2024 - June 2024",
                    "title": "Internship at CNRS-IPREM IBEAS Laboratory",
                    "location": "Technopôle Helioparc, Pau",
                    "description": "Design and application of bioinformatics and biostatistics tools for the analysis of data related to microbial communities.",
                    "url": "https://github.com/RaphaelRibes/Analysis-of-Hydrocarbonoclastic-Microbial-Communities-Subjected-to-Different-Oxygenation-Conditions",
                    "logos": ["images/IPREM.png", "images/CNRS.png"]
                },
                {
                    "date": "2020 - 2024",
                    "title": "Seasonal Job",
                    "location": "Ferme avicole Rey, Buros",
                    "description": "Direct sales, handling, stock management, machine operation, training new entrants.",
                    "logos": ["images/oeuf de rey.png"]
                }
            ]
        },
        "education": {
            "title": "Education",
            "items": [
                {
                    "date": "2024 - 2026",
                    "title": "Master in Bioinformatics",
                    "location": "University of Montpellier, Montpellier",
                    "description": "Development of skills in biological data analysis and applied computer programming such as Machine Learning and operational development."
                },
                {
                    "date": "2021 - 2024",
                    "title": "Bachelor in Cellular and Molecular Biology / Health Access",
                    "location": "University of Pau and Pays de l'Adour, Pau",
                    "description": "Acquisition of a comprehensive vision of life sciences and development of rigor and autonomy in the context of learning health sciences."
                }
            ]
        },
        "volunteering": {
            "title": "Volunteering",
            "items": [
                {
                    "date": "2019 - 2026",
                    "title": "Engagement at Altearn Association",
                    "description": "Board member, wrote several online articles, participated in the development of a Discord bot. Contributed to a group charity event in partnership with Greenpeace."
                }
            ]
        },
        "conferences": {
            "title": "Scientific Mediation",
            "items": [
                {
                    "date": "Feb 2-3, 2026",
                    "title": "Pixi Workshop - Montpellier Omics Days (14th Edition)",
                    "location": "Montpellier",
                    "slug": "pixi-workshop-mods2026",
                    "description": "A hands-on workshop to master Pixi, the next-generation package and environment manager. From project initialization to containerization with Pixitainer.",
                    "fullDescription": "This practical workshop guides participants through the fundamentals of Pixi to advanced use cases, including workspace containerization with Pixitainer.\n\n**Learning Objectives:**\n- Initialize a Pixi project\n- Manage conda and PyPI dependencies\n- Create and automate simple tasks\n- Understand the structure of a real project\n- Containerize a project with Pixitainer\n\n**Exercises:**\n- Exercise 1: Pédiluve (Getting started)\n- Exercise 2: Grand Bassin (Advanced usage)",
                    "url": "https://github.com/RaphaelRibes/atelierpixiMODS2026",
                    "images": ["images/atelierpixi2.jpeg", "images/atelierpixi3.jpeg", "images/atelierpixi4.jpeg"]
                },
                {
                    "date": "Feb 2-3, 2026",
                    "title": "Organisation of the Montpellier OMICs Days 2026",
                    "location": "Montpellier",
                    "slug": "mods2026-organisation",
                    "type": "congress",
                    "banner": "images/logomods.png",
                    "description": "Manager of the intervenants pole for the 14th edition of the Montpellier OMICs Days. Orchestrated speaker interventions and workshops for a successful event.",
                    "fullDescription": "As a manager of the intervenants pole for the Montpellier OMICs Days 2026, I was responsible along with the other poles for coordinating the scientific program. This involved selecting and inviting speakers, organizing workshops, and managing the schedule to ensure a smooth flow of events. The event featured a diverse range of topics from metagenomics to AI in bioinformatics, fostering a rich environment for scientific exchange. \n\nMy role required close collaboration with other poles to align the scientific content with the overall theme and logistics of the conference. The success of the event was marked by high attendance and positive feedback from both participants and speakers.",
                    "images": [
                        "images/MOD2026_2.jpg", "images/atelierpixi4.jpeg", "images/MOD2026_3.jpg", "images/MOD2026_4.jpg",
                        "images/MOD2026_5.jpg", "images/MOD2026_6.jpg", "images/MOD2026_7.jpg", "images/MOD2026_8.jpg",
                        "images/MOD2026_9.jpg", "images/MOD2026_10.jpg", "images/MOD2026_11.jpg"
                    ]
                },
                {
                    "date": "Oct 30, 2025",
                    "title": "Reproducibility within Reach",
                    "location": "Montpellier",
                    "slug": "reproducibility-within-reach",
                    "description": "Addressed the challenges of reproducibility (\"It Works on My Machine\"). Introduced Pixi as a fast, user-friendly, and isolated tool that combines features from Conda, Cargo, and CMake.",
                    "fullDescription": "This talk explored the imperative of reproducibility in computational science. Starting from the infamous \"It Works on My Machine\" problem—caused by version mismatches and dependency conflicts. I reviewed current solutions (requirements.txt, Poetry, Conda, Singularity, GUIX) and their trade-offs. I then introduced Pixi, a tool combining multi-language package management (like Conda), lockfile-based project management (like uv and Cargo), and task automation (like Makefile). The presentation included a live demonstration analyzing FASTQ files and building k-mer graphs, and concluded with a discussion on long-term deployment challenges.",
                    "image": "images/conference_slide.png",
                    "url": "https://gitlab.in2p3.fr/mbi/mbi/-/tree/master/20251030_Pixi?ref_type=heads",
                    "video": "gWVV1n1Le2w"
                }
            ]
        },
        "skills": {
            "title": "Skills",
            "tech": "Python, Shell, Pixi, Rust, Snakemake, R, Java, C++, Singularity, Apptainer, HPC, SLURM",
            "soft": "French (Native), English (C2), Teamwork, Public Speaking, Scientific Popularization, Mentoring, Technical Writing",
            "human": "French (Native), English (C2), Teamwork, Public Speaking, Scientific Popularization, Mentoring, Technical Writing",
            "academic": "Data Analysis, Microbiology, Molecular Biology, Cellular Biology, Physiology, Biochemistry, Microbial Ecology"
        },
        "projects": {
            "title": "Projects",
            "items": [
                {
                    "title": "Pixitainer",
                    "subtitle": "Pixi Extension for Apptainer Containers",
                    "description": "Bridge the gap between fast-paced Pixi development and robust Apptainer production environments. Freeze your environment into a production-ready container with a single command: pixi containerize",
                    "features": [
                        { "icon": "fa-rocket", "text": "Seamless Mode", "detail": "Run commands through the container as if pixi was not even there" },
                        { "icon": "fa-snowflake", "text": "Frozen Environments", "detail": "Locks dependencies perfectly using your pixi.lock" },
                        { "icon": "fa-cogs", "text": "Customizable", "detail": "Choose your base image (Ubuntu, etc.) and specific environments" }
                    ],
                    "github_url": "https://github.com/RaphaelRibes/pixitainer",
                    "prefix_url": "https://prefix.dev/channels/raphaelribes/packages/pixitainer",
                    "pixi_url": "https://pixi.prefix.dev/latest/",
                    "tech": ["Apptainer", "Singularity", "Pixi", "Reproducibility", "HPC"]
                }
            ]
        },
        "contact": {
            "title": "Contact",
            "email": "raphael.ribes.etu@umontpellier.fr",
            "cv_url": "cv.pdf",
            "linkedin": "raphaël-ribes",
            "linkedin_url": "https://www.linkedin.com/in/rapha%C3%ABl-ribes/",
            "github": "RaphaelRibes",
            "gitlab": "RaphaelRibes",
            "gitlab_url": "https://gitlab.etu.umontpellier.fr/RaphaelRibes",
            "steam_url": "https://steamcommunity.com/id/JustaPlayer_/"
        }
    },
    "fr": {
        "nav": {
            "home": "Accueil",
            "about": "À propos",
            "experience": "Expérience",
            "education": "Formation",
            "volunteering": "Bénévolat",
            "conferences": "Médiation Scientifique",
            "skills": "Compétences",
            "projects": "Projets",
            "contact": "Contact"
        },
        "hero": {
            "title": "Raphaël Ribes",
            "subtitle": "Étudiant en Bioinformatique",
            "description": "Spécialisé en bioinformatique, je travaille à l’interface entre les sciences du vivant et de l’informatique. J'aime aller au fond des systèmes complexes pour comprendre leur fonctionnement, apportant un regard neuf sur la conception d’outils computationnels et l’exploitation de données biologiques complexes. Je m'engage pour assurer une meilleur reproductibilité, plus accessible en science.",
            "cta": "Télécharger CV"
        },
        "experience": {
            "title": "Expérience",
            "items": [
                {
                    "date": "Février 2026 - Juillet 2026",
                    "title": "Stage à l’ISEM - ISDM",
                    "location": "ISDM, Montpellier",
                    "description": "Suivi du microbiome social chez les primates sauvages à l’aide d’un pipeline de métagénomique shotgun personnalisé.",
                    "logos": ["images/isem.png", "images/ISDM.png"]
                },
                {
                    "date": "Avril 2025 - Août 2025",
                    "title": "Stage à L’INRAE-CIRAD, UMR AGAP",
                    "location": "INRAE—ARCAD, Montpellier",
                    "description": "Étude de l’effet du génome de référence sur la qualité du mapping et sur l’estimation de l’hétérozygotie résiduelle à l’aide d’outils bioinformatique et pipelines.",
                    "url": "https://gitlab.etu.umontpellier.fr/rribes-m1-internship",
                    "logos": ["images/INRAE.png", "images/CIRAD.png"]
                },
                {
                    "date": "Avril 2024 - Juin 2024",
                    "title": "Stage au laboratoire CNRS-IPREM IBEAS",
                    "location": "Technopôle Helioparc, Pau",
                    "description": "Conception et application d’outils bioinformatiques et biostatistiques dans l’analyse de données relatives aux communautés microbiennes.",
                    "url": "https://github.com/RaphaelRibes/Analysis-of-Hydrocarbonoclastic-Microbial-Communities-Subjected-to-Different-Oxygenation-Conditions",
                    "logos": ["images/IPREM.png", "images/CNRS.png"]
                },
                {
                    "date": "2020 - 2024",
                    "title": "Emploi saisonnier",
                    "location": "Ferme avicole Rey, Buros",
                    "description": "Ventes directes, manutentionnaire, gestion des stocks, manipulation de machines, formation des nouveaux entrants.",
                    "logos": ["images/oeuf de rey.png"]
                }
            ]
        },
        "education": {
            "title": "Formation",
            "items": [
                {
                    "date": "2024 - 2026",
                    "title": "Master Bioinformatique",
                    "location": "Université de Montpellier, Montpellier",
                    "description": "Développement de compétences en analyse de données biologiques ainsi qu’en programmation informatique appliquée telle que le Machine Learning et le développement opérationnel."
                },
                {
                    "date": "2021 - 2024",
                    "title": "Licence de Biologie Cellulaire et Moléculaire / Licence Accès Santé",
                    "location": "Université de Pau et Pays de l’Adour, Pau",
                    "description": "Acquisition d’une vision d’ensemble des sciences du vivant et développement de ma rigueur et mon autonomie dans le cadre de l’apprentissage en santé."
                }
            ]
        },
        "volunteering": {
            "title": "Bénévolat",
            "items": [
                {
                    "date": "2019 - 2026",
                    "title": "Engagement au sein de l’association Altearn",
                    "description": "Membre du conseil d’administration, j’ai rédigé plusieurs articles en ligne et participé au développement d’un bot Discord. J’ai également contribué à un événement caritatif de groupe en partenariat avec Greenpeace."
                }
            ]
        },
        "conferences": {
            "title": "Médiation Scientifique",
            "items": [
                {
                    "date": "2-3 Fév 2026",
                    "title": "Atelier Pixi - Montpellier Omics Days (14ème édition)",
                    "location": "Montpellier",
                    "slug": "pixi-workshop-mods2026",
                    "description": "Un atelier pratique pour maîtriser Pixi, le gestionnaire d'environnements et de packages nouvelle génération. De l'initialisation de projet à la conteneurisation avec Pixitainer.",
                    "fullDescription": "Cet atelier pratique guide les participants à travers les fondamentaux de Pixi jusqu'aux cas d'utilisation avancés, incluant la conteneurisation de workspaces avec Pixitainer.\n\n**Objectifs pédagogiques :**\n- Initialiser un projet Pixi\n- Gérer des dépendances conda et PyPI\n- Créer et automatiser une tâche simple\n- Comprendre la structure d'un projet réel\n- Conteneuriser un projet avec Pixitainer\n\n**Exercices :**\n- Exercice 1 : Pédiluve (Prise en main)\n- Exercice 2 : Grand Bassin (Usage avancé)",
                    "url": "https://github.com/RaphaelRibes/atelierpixiMODS2026",
                    "images": ["images/atelierpixi2.jpeg", "images/atelierpixi3.jpeg", "images/atelierpixi4.jpeg"]
                },
                {
                    "date": "2-3 Fév 2026",
                    "title": "Organisation des Montpellier OMICs Days 2026",
                    "location": "Montpellier",
                    "slug": "mods2026-organisation",
                    "type": "congress",
                    "banner": "images/logomods.png",
                    "description": "Responsable du pôle Intervenants pour la 14ème édition des Montpellier OMICs Days. Orchestration des interventions et ateliers pour un événement réussi.",
                    "fullDescription": "En tant que responsable du pôle intervenants pour les Montpellier OMICs Days 2026, j'étais chargé avec mes colègues de la coordination du programme scientifique avec les scientifiques externes à la promotion. Cela impliquait la sélection et l'invitation des conférenciers, l'organisation des ateliers et la gestion du planning pour assurer un déroulement fluide de l'événement. L'événement a couvert une gamme variée de sujets, de la métagénomique à l'IA en bioinformatique, favorisant un environnement riche pour l'échange scientifique.\n\nMon rôle a nécessité une collaboration étroite avec les autres pôles pour aligner le contenu scientifique avec le thème global et la logistique de la conférence. Le succès de l'événement a été marqué par une forte participation et des retours positifs tant des participants que des intervenants.",
                    "images": [
                        "images/MOD2026_2.jpg", "images/atelierpixi4.jpeg", "images/MOD2026_3.jpg", "images/MOD2026_4.jpg",
                        "images/MOD2026_5.jpg", "images/MOD2026_6.jpg", "images/MOD2026_7.jpg", "images/MOD2026_8.jpg",
                        "images/MOD2026_9.jpg", "images/MOD2026_10.jpg", "images/MOD2026_11.jpg"
                    ]
                },
                {
                    "date": "30 Oct 2025",
                    "title": "La reproductibilité à portée de main",
                    "location": "Montpellier",
                    "slug": "reproducibility-within-reach",
                    "description": "Aborde les défis de la reproductibilité (\"Ça marche sur ma machine\"). Introduction de Pixi comme un outil rapide, convivial et isolé, combinant les fonctionnalités de Conda, Cargo et CMake.",
                    "fullDescription": "Cette présentation a exploré l'impératif de la reproductibilité en science. Partant du fameux problème \"Ça marche sur ma machine\", causé par les mauvaises versions et conflits de dépendances. J'ai passé en revue les solutions actuelles (requirements.txt, Poetry, Conda, Singularity, GUIX) et leurs compromis. J'ai ensuite présenté Pixi, un outil combinant la gestion de paquets multi-langages (comme Conda et pypi), la gestion de projet par lockfile (comme uv et Cargo), et l'automatisation des tâches (comme Makefile). La présentation incluait une démonstration live d'analyse de fichiers FASTQ et de construction de graphes de k-mers, et s'est conclue par une discussion sur les limitations du déploiement à long terme.",
                    "image": "images/conference_slide.png",
                    "url": "https://gitlab.in2p3.fr/mbi/mbi/-/tree/master/20251030_Pixi?ref_type=heads",
                    "video": "gWVV1n1Le2w"
                }
            ]
        },
        "skills": {
            "title": "Compétences",
            "tech": "Python, Shell, Pixi, Rust, Snakemake, R, Java, C++, Singularity, Apptainer, HPC, SLURM",
            "soft": "Français (Natif), Anglais (C2), Mentorat, Travail d'équipe, Vulgarisation scientifique, Rédaction technique",
            "human": "Français (Natif), Anglais (C2), Mentorat, Travail d'équipe, Vulgarisation scientifique, Rédaction technique",
            "academic": "Analyse de données, Microbiologie, Physiologie, Biologie moléculaire, Biologie cellulaire, Biochimie, Écologie microbienne"
        },
        "projects": {
            "title": "Projets",
            "items": [
                {
                    "title": "Pixitainer",
                    "subtitle": "Extension Pixi pour Conteneurs Apptainer",
                    "description": "Combinez le développement rapide avec Pixi et la robustesse d'Apptainer pour la production. Gelez votre environnement dans un conteneur prêt pour la production avec une seule commande : pixi containerize",
                    "features": [
                        { "icon": "fa-rocket", "text": "Mode Transparent", "detail": "Exécutez des commandes via le conteneur comme si pixi n'était pas là" },
                        { "icon": "fa-snowflake", "text": "Environnements Gelés", "detail": "Verrouille parfaitement les dépendances via votre pixi.lock" },
                        { "icon": "fa-cogs", "text": "Personnalisable", "detail": "Choisissez votre image de base (Ubuntu, etc.) et environnements spécifiques" }
                    ],
                    "github_url": "https://github.com/RaphaelRibes/pixitainer",
                    "prefix_url": "https://prefix.dev/channels/raphaelribes/packages/pixitainer",
                    "pixi_url": "https://pixi.prefix.dev/latest/",
                    "tech": ["Apptainer", "Singularity", "Pixi", "Reproducibility", "HPC"]
                }
            ]
        },
        "contact": {
            "title": "Contact",
            "email": "raphael.ribes@etu.umontpellier.fr",
            "cv_url": "cv.pdf",
            "linkedin": "raphaël-ribes",
            "linkedin_url": "https://www.linkedin.com/in/rapha%C3%ABl-ribes/",
            "github": "RaphaelRibes",
            "gitlab": "RaphaelRibes",
            "gitlab_url": "https://gitlab.etu.umontpellier.fr/RaphaelRibes",
            "steam_url": "https://steamcommunity.com/id/JustaPlayer_/"
        }
    }
};