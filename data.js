const translations = {
    "en": {
        "nav": {
            "home": "Home",
            "about": "About",
            "experience": "Experience",
            "education": "Education",
            "volunteering": "Volunteering",
            "conferences": "Conferences",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact"
        },
        "hero": {
            "title": "Raphaël Ribes",
            "subtitle": "Bioinformatics Student",
            "description": "Driven by a passion for technology and biology, I am a curious and autonomous learner who thrives on mastering new skills. I enjoy getting in the guts of complex systems to understand how they function, allowing me to find innovative solutions from a fresh perspective. I am dedicated to pushing these boundaries to ensure greater and easier reproducibility in science.",
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
            "title": "Reproducibility within Reach",
            "items": [
                {
                    "date": "Oct 30, 2025",
                    "title": "Reproducibility within Reach",
                    "location": "Montpellier",
                    "description": "Addressed the challenges of reproducibility ('It Works on My Machine'). Introduced Pixi as a fast, user-friendly, and isolated tool that combines features from Conda, Cargo, and CMake. Proposed 'Pixigularity' for complete environment portability.",
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
            "conferences": "Conférences",
            "skills": "Compétences",
            "projects": "Projets",
            "contact": "Contact"
        },
        "hero": {
            "title": "Raphaël Ribes",
            "subtitle": "Étudiant en Bioinformatique",
            "description": "Passionné par la technologie et la biologie, je suis un apprenant curieux et autonome qui s'épanouit dans l'acquisition de nouvelles compétences. J'aime aller au fond des systèmes complexes pour comprendre leur fonctionnement, ce qui me permet de trouver des solutions innovantes avec un regard neuf. Je m'engage à repousser les limites pour assurer une reproductibilité plus grande et plus accessible en science.",
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
            "title": "Conférences",
            "items": [
                {
                    "date": "30 Oct 2025",
                    "title": "La reproductibilité à portée de main",
                    "location": "Montpellier",
                    "description": "A abordé les défis de la reproductibilité ('Ça marche sur ma machine'). Introduction de Pixi comme un outil rapide, convivial et isolé, combinant les fonctionnalités de Conda, Cargo et CMake. Proposition de 'Pixigularity' pour une portabilité complète de l'environnement.",
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