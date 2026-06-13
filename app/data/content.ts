/**
 * Central, bilingual content source for the portfolio.
 * Everything the UI renders lives here so copy and structure stay in one place.
 * `en` is the source of truth for the shape; `fr` must match it (type-checked).
 */

export type Lang = "en" | "fr";

export type Link = { label: string; href: string };

export type SkillGroup = { label: string; items: string[] };

export type Experience = {
  role: string;
  org: string;
  note?: string;
  period: string;
  place: string;
  bullets: string[];
  tags: string[];
};

export type Project = {
  id: string;
  name: string;
  kind: "Solo" | "Team";
  role?: string;
  year: string;
  blurb: string;
  details: string[];
  stack: string[];
  focus: string;
  featured?: boolean;
  privateRepo?: boolean;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  place: string;
  note: string;
};

/* ============================== ENGLISH ============================== */

const en = {
  profile: {
    name: "Tetio Tsague",
    role: "Junior Software Engineer",
    initials: "TT",
    kicker: "JUNIOR SOFTWARE ENGINEER · FULL-STACK · BELGIUM",
    headline:
      "I engineer secure, reliable software — from full-stack platforms to applied AI.",
    intro:
      "Final-year Applied Computer Science student (BSc, 2026) and junior software engineer. I work across Java / Spring Boot, Python and TypeScript, and I care about clean architecture, security, and systems that fail loudly — never quietly.",
    status: "Available July 2026 — open to junior & graduate engineering roles",
    location: "Silly, Belgium",
    coordinates: "50.65° N, 3.92° E",
    email: "tetiotsague20@gmail.com",
    phone: "+32 465 72 47 29",
    github: "https://github.com/TxTx04",
    linkedin: "https://www.linkedin.com/in/tsague-tetio-184975235",
    cv: "/Tetio_Tsague_Software_Engineer_CV.pdf",
  },

  about: {
    paragraphs: [
      "I'm a software engineer in the final year of an Applied Computer Science degree at HELHa (Mons, Belgium). My path started with intensive mathematics and physics in Cameroon, continued through a year of computer science in Yaoundé, and brought me to Belgium to specialise in application development.",
      "I like the whole stack: designing a clean REST API in Spring Boot, modelling a relational database, wiring a React or Angular front end, and reaching for machine learning when the problem genuinely calls for it. I've shipped team projects under exam pressure and built ambitious solo ones from a blank repository.",
      "What I optimise for is trust: code that is secure by default, easy for the next person to read, and dependable in production. That mindset is exactly what drew me toward financial-grade, mission-critical systems.",
    ],
    facts: [
      { k: "Based in", v: "Silly · Belgium" },
      { k: "Languages", v: "French (native) · English (B2)" },
      { k: "Focus", v: "Backend · Full-stack · Applied AI" },
      { k: "Graduating", v: "July 2026" },
    ],
  },

  skills: [
    {
      label: "Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript", "C++", "PHP", "SQL"],
    },
    {
      label: "Backend & APIs",
      items: [
        "Spring Boot",
        "FastAPI",
        "REST API design",
        "JWT auth",
        "CSRF protection",
        "JPA / Hibernate",
        "Maven",
      ],
    },
    {
      label: "Frontend",
      items: ["React", "Angular", "Next.js", "Vite", "JavaFX", "HTML5 / CSS3", "Tailwind"],
    },
    {
      label: "Data & ML",
      items: [
        "PyTorch",
        "MONAI",
        "scikit-learn",
        "OpenCV",
        "Data mining",
        "Dimensional modelling",
      ],
    },
    {
      label: "Databases",
      items: ["MySQL", "PostgreSQL", "SQLite", "Relational design"],
    },
    {
      label: "Tools & Practice",
      items: ["Git / GitHub", "Docker", "Vercel", "IntelliJ", "Agile / Scrum", "Unit testing"],
    },
    {
      label: "Engineering",
      items: [
        "OOP & SOLID",
        "Design patterns",
        "Algorithms & data structures",
        "Networking (TCP/IP, VLSM)",
      ],
    },
  ] as SkillGroup[],

  experiences: [
    {
      role: "Software Engineering Intern",
      org: "Infrabel",
      note: "National railway infrastructure manager of Belgium",
      period: "Feb 2026 – May 2026",
      place: "Brussels, BE",
      bullets: [
        "Designed and built a decision-support tool that correlates operational alarms from the ICC department with planned maintenance interventions, using heuristic matching rules to surface the most likely alarm-to-intervention links.",
        "Cross-referenced large operational datasets to replace slow manual analysis, giving engineers a faster, evidence-based view for planning.",
        "Worked inside an established engineering team — from requirement analysis to a working, demonstrated tool — through iterative feedback cycles.",
      ],
      tags: ["Decision support", "Data correlation", "Heuristics"],
    },
    {
      role: "Academic Tutor — Software & Data Science",
      org: "Self-employed",
      period: "Aug 2024 – Present",
      place: "Brussels, BE",
      bullets: [
        "Coach higher-education students in data analytics and machine learning: model design and evaluation (k-NN, Naive Bayes), dimensional modelling (fact & dimension tables), data warehousing, data mining and analysis.",
        "Turn complex technical concepts into clear, structured explanations — measurably improving students' understanding and exam results.",
      ],
      tags: ["Mentoring", "Machine learning", "Data warehousing"],
    },
  ] as Experience[],

  projects: [
    {
      id: "radixa",
      name: "Radixa",
      kind: "Solo",
      role: "Sole engineer",
      year: "2026",
      featured: true,
      privateRepo: true,
      focus: "Applied AI · Medical imaging",
      blurb:
        "AI-assisted dental diagnosis platform that reads radiographs for both adult and pediatric dentition — an angle current tools under-serve.",
      details: [
        "Detects dental pathologies on 2D radiographs with fine-tuned medical-imaging models (MONAI, YOLOv8, nnU-Net) — never trained from scratch.",
        "Explainable predictions with calibrated confidence scores; the clinician always remains the decision-maker.",
        "Privacy-by-design for health data (GDPR / EU MDR) with local edge inference, served through a FastAPI inference API and an Angular practitioner UI.",
      ],
      stack: ["Python", "FastAPI", "Angular", "PyTorch", "MONAI", "Docker"],
    },
    {
      id: "game-world-english",
      name: "Game World English",
      kind: "Solo",
      role: "Sole engineer",
      year: "2026",
      featured: true,
      privateRepo: true,
      focus: "Frontend · Real-time",
      blurb:
        "Offline-first English⇄French vocabulary game with a spaced-repetition engine and real-time multiplayer rooms.",
      details: [
        "On-device progress (localStorage) with a light spaced-repetition engine that re-queues missed words for durable learning.",
        "Real-time multiplayer: lobby, live scoreboard and QR-code join, powered by serverless functions on Vercel.",
        "Animated, responsive UI built with React, Vite and framer-motion — works fully offline, no account required.",
      ],
      stack: ["React", "Vite", "TypeScript", "framer-motion", "Serverless"],
    },
    {
      id: "aemt-notes",
      name: "AEMT Notes",
      kind: "Team",
      role: "Full-stack developer",
      year: "2026",
      featured: true,
      privateRepo: true,
      focus: "Full-stack · Architecture",
      blurb:
        "Full-stack hierarchical note & knowledge application with secure auth and one-click export — built and shipped under timed exam conditions.",
      details: [
        "Hierarchical notes & folders with note linking and one-click ZIP export of an entire folder tree.",
        "Spring Boot backend architected around a clean, command-based (CQRS-style) handler-per-use-case structure.",
        "React + TypeScript front end with JWT-secured sessions against a REST API.",
      ],
      stack: ["React", "TypeScript", "Spring Boot", "Java", "JWT", "REST"],
    },
    {
      id: "projettm",
      name: "Movie Catalog & Recommendations",
      kind: "Team",
      role: "Lead contributor",
      year: "2025",
      privateRepo: true,
      focus: "Web · Security",
      blurb:
        "A movie catalog and recommendation platform where I was the top contributor, owning authentication and security.",
      details: [
        "Implemented secure session authentication and CSRF-token protection across the app.",
        "Built an admin moderation panel, bulk movie import, and a personalized recommendation feature.",
        "Backed by a MySQL database with a PHP service layer.",
      ],
      stack: ["PHP", "MySQL", "JavaScript"],
    },
    {
      id: "ttmc",
      name: "TTMC — Quiz Board Game",
      kind: "Team",
      role: "Core contributor",
      year: "2025",
      privateRepo: true,
      focus: "OOP · Design patterns",
      blurb:
        "A multiplayer quiz board game that doubles as a clean object-oriented engineering showcase.",
      details: [
        "Clean MVC architecture separating game logic, JavaFX views and controllers.",
        "Factory pattern for question creation and Iterator pattern for pawn traversal.",
        "Robust custom exception handling for input, loading and game-state errors.",
      ],
      stack: ["Java", "JavaFX"],
    },
    {
      id: "subnetting",
      name: "Network Planning Toolkit",
      kind: "Team",
      role: "Core contributor",
      year: "2025",
      privateRepo: true,
      focus: "Networking",
      blurb:
        "A tool to calculate, verify and plan IP addressing schemes — classful and VLSM.",
      details: [
        "Classful and VLSM subnet calculation with automatic network-class detection.",
        "Verification routines to validate addressing plans against constraints.",
        "User authentication and SQLite persistence for saved plans.",
      ],
      stack: ["Python", "SQLite"],
    },
    {
      id: "mamanmoi",
      name: "MamanMoi",
      kind: "Team",
      role: "Contributor",
      year: "2025",
      privateRepo: true,
      focus: "Community platform",
      blurb:
        "A community social platform for young mothers to share advice and support one another.",
      details: [
        "Spring Boot REST backend with JWT authentication and role-based admin moderation.",
        "Feed with posts and comments, plus a shared events agenda.",
        "Lightweight front end consuming the API.",
      ],
      stack: ["Java", "Spring Boot", "JWT", "JavaScript"],
    },
    {
      id: "oneirica",
      name: "Oneirica",
      kind: "Team",
      role: "Contributor",
      year: "2025",
      privateRepo: true,
      focus: "Game · C++",
      blurb: "A 2D platformer game built in C++ with sprite-based animation.",
      details: [
        "Sprite-based character with idle, run, jump, attack and death animations.",
        "Game loop, player physics and health system in C++.",
      ],
      stack: ["C++"],
    },
  ] as Project[],

  caseStudy: {
    id: "rubik",
    tag: "CASE STUDY",
    name: "Rubik's Cube Solver",
    subtitle: "Computer vision meets a deterministic solver",
    context:
      "A solo project: read a physical Rubik's Cube from images and return the exact moves to solve it. It sits at the intersection of two things I enjoy — computer vision and clean algorithmic problem-solving.",
    pipeline: [
      {
        step: "01",
        title: "Capture & detect",
        body: "Computer vision reads the cube face by face, locating each facelet and classifying its colour under varying lighting — the perception layer that turns pixels into a structured cube state.",
      },
      {
        step: "02",
        title: "Reconstruct state",
        body: "The detected facelets are assembled into a validated internal representation of the cube, rejecting impossible or inconsistent configurations before solving.",
      },
      {
        step: "03",
        title: "Solve",
        body: "A solving algorithm computes a valid sequence of moves from the captured state to the solved cube.",
      },
      {
        step: "04",
        title: "Output the moves",
        body: "The solution is returned as a clean, human-followable, step-by-step move sequence.",
      },
    ],
    stack: ["Python", "OpenCV", "Computer vision", "Solving algorithm"],
    note: "Not yet on GitHub — documented here as a written case study.",
  },

  education: [
    {
      degree: "BSc in Applied Computer Science — Application Development",
      school: "Haute École Louvain en Hainaut (HELHa)",
      period: "Sep 2023 – Jul 2026 (expected)",
      place: "Mons, Belgium",
      note: "Software engineering & architecture, algorithms & data structures, databases, web & mobile development, computer networks, operating systems, OOP, machine learning, IT security, Agile project management.",
    },
    {
      degree: "BSc Computer Science — first year",
      school: "University of Yaoundé I",
      period: "Sep 2022 – Jul 2023",
      place: "Yaoundé, Cameroon",
      note: "Advanced mathematics, electronics & physics, and programming foundations.",
    },
    {
      degree: "Scientific Baccalaureate — Mathematics & Physics",
      school: "Collège de La Retraite",
      period: "2022",
      place: "Yaoundé, Cameroon",
      note: "Intensive mathematics (5h/week), physics (4h/week) and chemistry.",
    },
  ] as EducationItem[],

  ui: {
    nav: {
      about: "About",
      work: "Work",
      caseStudy: "Case study",
      contact: "Contact",
      cv: "CV ↗",
    },
    hero: {
      viewWork: "View work",
      downloadCv: "Download CV",
      statusK: "Status",
      statusV: "Available Jul 2026",
      basedK: "Based in",
      stackK: "Core stack",
      stackV: "Java · Python · TypeScript",
      contactK: "Contact",
    },
    sections: {
      about: { title: "Profile", label: "Who I am" },
      skills: { title: "Capabilities", label: "Tools of the trade" },
      work: { title: "Selected work" },
      experience: { title: "Experience", label: "On the job" },
      education: { title: "Education", label: "Academic path" },
    },
    work: {
      countWord: "projects",
      kind: { Solo: "Solo", Team: "Team" },
      privateBadge: "Private · on request",
    },
    caseStudy: { step: "STEP" },
    footer: {
      kicker: "§06 — Get in touch",
      headPre: "Let's build something ",
      headEm: "dependable.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      downloadCv: "Download CV",
      built: "Designed & built by Tetio Tsague · Next.js",
    },
    lang: { en: "EN", fr: "FR", switchAria: "Switch language" },
  },
};

/** The shape of all site content — derived from the English source. */
export type SiteContent = typeof en;

/* ============================== FRENCH ============================== */

const fr: SiteContent = {
  profile: {
    name: "Tetio Tsague",
    role: "Ingénieur logiciel junior",
    initials: "TT",
    kicker: "INGÉNIEUR LOGICIEL JUNIOR · FULL-STACK · BELGIQUE",
    headline:
      "Je conçois des logiciels sûrs et fiables — des plateformes full-stack à l'IA appliquée.",
    intro:
      "Étudiant en dernière année d'informatique appliquée (bachelier, 2026) et ingénieur logiciel junior. Je travaille avec Java / Spring Boot, Python et TypeScript, et j'attache de l'importance à une architecture propre, à la sécurité, et aux systèmes qui échouent franchement — jamais en silence.",
    status:
      "Disponible en juillet 2026 — ouvert aux postes d'ingénieur junior et graduate",
    location: "Silly, Belgique",
    coordinates: "50.65° N, 3.92° E",
    email: "tetiotsague20@gmail.com",
    phone: "+32 465 72 47 29",
    github: "https://github.com/TxTx04",
    linkedin: "https://www.linkedin.com/in/tsague-tetio-184975235",
    cv: "/Tetio_Tsague_Ingenieur_Logiciel_CV.pdf",
  },

  about: {
    paragraphs: [
      "Je suis ingénieur logiciel, en dernière année de bachelier en informatique appliquée à la HELHa (Mons, Belgique). Mon parcours a commencé par des mathématiques et de la physique intensives au Cameroun, s'est poursuivi par une année d'informatique à Yaoundé, et m'a mené en Belgique pour me spécialiser dans le développement d'applications.",
      "J'aime toute la chaîne : concevoir une API REST propre avec Spring Boot, modéliser une base de données relationnelle, brancher un front-end React ou Angular, et faire appel au machine learning quand le problème le justifie vraiment. J'ai livré des projets d'équipe sous la pression des examens et bâti des projets solo ambitieux à partir d'un dépôt vierge.",
      "Ce que je recherche avant tout, c'est la confiance : un code sécurisé par défaut, facile à lire pour la personne qui suivra, et fiable en production. C'est précisément cet état d'esprit qui m'attire vers les systèmes critiques de niveau financier.",
    ],
    facts: [
      { k: "Basé à", v: "Silly · Belgique" },
      { k: "Langues", v: "Français (natif) · Anglais (B2)" },
      { k: "Domaines", v: "Backend · Full-stack · IA appliquée" },
      { k: "Diplôme", v: "Juillet 2026" },
    ],
  },

  skills: [
    {
      label: "Langages",
      items: ["Java", "Python", "TypeScript", "JavaScript", "C++", "PHP", "SQL"],
    },
    {
      label: "Backend & API",
      items: [
        "Spring Boot",
        "FastAPI",
        "Conception d'API REST",
        "Auth JWT",
        "Protection CSRF",
        "JPA / Hibernate",
        "Maven",
      ],
    },
    {
      label: "Frontend",
      items: ["React", "Angular", "Next.js", "Vite", "JavaFX", "HTML5 / CSS3", "Tailwind"],
    },
    {
      label: "Données & ML",
      items: [
        "PyTorch",
        "MONAI",
        "scikit-learn",
        "OpenCV",
        "Data mining",
        "Modélisation dimensionnelle",
      ],
    },
    {
      label: "Bases de données",
      items: ["MySQL", "PostgreSQL", "SQLite", "Conception relationnelle"],
    },
    {
      label: "Outils & pratiques",
      items: ["Git / GitHub", "Docker", "Vercel", "IntelliJ", "Agile / Scrum", "Tests unitaires"],
    },
    {
      label: "Ingénierie",
      items: [
        "POO & SOLID",
        "Design patterns",
        "Algorithmes & structures de données",
        "Réseaux (TCP/IP, VLSM)",
      ],
    },
  ],

  experiences: [
    {
      role: "Stagiaire en ingénierie logicielle",
      org: "Infrabel",
      note: "Gestionnaire de l'infrastructure ferroviaire nationale belge",
      period: "Févr. 2026 – Mai 2026",
      place: "Bruxelles, BE",
      bullets: [
        "Conçu et développé un outil d'aide à la décision qui met en correspondance les alarmes opérationnelles du département ICC avec les interventions de maintenance planifiées, à l'aide de règles de correspondance heuristiques pour faire ressortir les liens alarme–intervention les plus probables.",
        "Croisé de grands ensembles de données opérationnelles pour remplacer une analyse manuelle lente, offrant aux ingénieurs une vision plus rapide et fondée sur les faits pour la planification.",
        "Travaillé au sein d'une équipe d'ingénierie établie — de l'analyse des besoins jusqu'à un outil fonctionnel et démontré — au fil de cycles de retours itératifs.",
      ],
      tags: ["Aide à la décision", "Corrélation de données", "Heuristiques"],
    },
    {
      role: "Tuteur académique — Logiciel & Data Science",
      org: "Indépendant",
      period: "Août 2024 – Aujourd'hui",
      place: "Bruxelles, BE",
      bullets: [
        "J'accompagne des étudiants de l'enseignement supérieur en analyse de données et machine learning : conception et évaluation de modèles (k-NN, Naive Bayes), modélisation dimensionnelle (tables de faits & de dimensions), data warehousing, data mining et analyse de données.",
        "Je transforme des concepts techniques complexes en explications claires et structurées — améliorant de façon mesurable la compréhension et les résultats d'examen des étudiants.",
      ],
      tags: ["Mentorat", "Machine learning", "Data warehousing"],
    },
  ],

  projects: [
    {
      id: "radixa",
      name: "Radixa",
      kind: "Solo",
      role: "Ingénieur unique",
      year: "2026",
      featured: true,
      privateRepo: true,
      focus: "IA appliquée · Imagerie médicale",
      blurb:
        "Plateforme de diagnostic dentaire assisté par IA qui analyse les radiographies pour la dentition adulte et pédiatrique — un angle que les outils actuels couvrent mal.",
      details: [
        "Détecte les pathologies dentaires sur radiographies 2D grâce à des modèles d'imagerie médicale affinés (MONAI, YOLOv8, nnU-Net) — jamais entraînés de zéro.",
        "Prédictions explicables avec des scores de confiance calibrés ; le praticien reste toujours le décideur.",
        "Confidentialité dès la conception pour les données de santé (RGPD / EU MDR), avec inférence locale en périphérie, exposée via une API d'inférence FastAPI et une interface praticien en Angular.",
      ],
      stack: ["Python", "FastAPI", "Angular", "PyTorch", "MONAI", "Docker"],
    },
    {
      id: "game-world-english",
      name: "Game World English",
      kind: "Solo",
      role: "Ingénieur unique",
      year: "2026",
      featured: true,
      privateRepo: true,
      focus: "Frontend · Temps réel",
      blurb:
        "Jeu de vocabulaire anglais⇄français « offline-first », avec un moteur de répétition espacée et des salles multijoueurs en temps réel.",
      details: [
        "Progression stockée sur l'appareil (localStorage) avec un moteur léger de répétition espacée qui remet en file les mots ratés pour un apprentissage durable.",
        "Multijoueur en temps réel : lobby, tableau des scores en direct et connexion par QR code, propulsés par des fonctions serverless sur Vercel.",
        "Interface animée et responsive construite avec React, Vite et framer-motion — fonctionne entièrement hors ligne, sans compte.",
      ],
      stack: ["React", "Vite", "TypeScript", "framer-motion", "Serverless"],
    },
    {
      id: "aemt-notes",
      name: "AEMT Notes",
      kind: "Team",
      role: "Développeur full-stack",
      year: "2026",
      featured: true,
      privateRepo: true,
      focus: "Full-stack · Architecture",
      blurb:
        "Application full-stack de notes & de connaissances hiérarchiques, avec authentification sécurisée et export en un clic — conçue et livrée en conditions d'examen chronométrées.",
      details: [
        "Notes & dossiers hiérarchiques avec liens entre notes et export ZIP en un clic d'une arborescence entière.",
        "Backend Spring Boot architecturé autour d'une structure propre, basée sur les commandes (façon CQRS), avec un handler par cas d'usage.",
        "Front-end React + TypeScript avec sessions sécurisées par JWT contre une API REST.",
      ],
      stack: ["React", "TypeScript", "Spring Boot", "Java", "JWT", "REST"],
    },
    {
      id: "projettm",
      name: "Catalogue & recommandations de films",
      kind: "Team",
      role: "Contributeur principal",
      year: "2025",
      privateRepo: true,
      focus: "Web · Sécurité",
      blurb:
        "Une plateforme de catalogue et de recommandation de films où j'étais le principal contributeur, responsable de l'authentification et de la sécurité.",
      details: [
        "Implémenté l'authentification de session sécurisée et la protection par jeton CSRF dans toute l'application.",
        "Développé un panneau de modération admin, l'import de films en masse et une fonction de recommandation personnalisée.",
        "Reposant sur une base de données MySQL avec une couche de services en PHP.",
      ],
      stack: ["PHP", "MySQL", "JavaScript"],
    },
    {
      id: "ttmc",
      name: "TTMC — Jeu de plateau quiz",
      kind: "Team",
      role: "Contributeur clé",
      year: "2025",
      privateRepo: true,
      focus: "POO · Design patterns",
      blurb:
        "Un jeu de plateau quiz multijoueur qui sert aussi de vitrine d'ingénierie orientée objet soignée.",
      details: [
        "Architecture MVC propre séparant la logique de jeu, les vues JavaFX et les contrôleurs.",
        "Patron Factory pour la création des questions et patron Iterator pour le parcours des pions.",
        "Gestion robuste d'exceptions personnalisées pour les erreurs de saisie, de chargement et d'état du jeu.",
      ],
      stack: ["Java", "JavaFX"],
    },
    {
      id: "subnetting",
      name: "Boîte à outils de planification réseau",
      kind: "Team",
      role: "Contributeur clé",
      year: "2025",
      privateRepo: true,
      focus: "Réseaux",
      blurb:
        "Un outil pour calculer, vérifier et planifier des plans d'adressage IP — classful et VLSM.",
      details: [
        "Calcul de sous-réseaux classful et VLSM avec détection automatique de la classe réseau.",
        "Routines de vérification pour valider les plans d'adressage face aux contraintes.",
        "Authentification des utilisateurs et persistance SQLite pour les plans sauvegardés.",
      ],
      stack: ["Python", "SQLite"],
    },
    {
      id: "mamanmoi",
      name: "MamanMoi",
      kind: "Team",
      role: "Contributeur",
      year: "2025",
      privateRepo: true,
      focus: "Plateforme communautaire",
      blurb:
        "Une plateforme sociale communautaire pour les jeunes mamans, afin de partager conseils et soutien.",
      details: [
        "Backend REST Spring Boot avec authentification JWT et modération admin basée sur les rôles.",
        "Fil d'actualité avec publications et commentaires, plus un agenda d'événements partagé.",
        "Front-end léger consommant l'API.",
      ],
      stack: ["Java", "Spring Boot", "JWT", "JavaScript"],
    },
    {
      id: "oneirica",
      name: "Oneirica",
      kind: "Team",
      role: "Contributeur",
      year: "2025",
      privateRepo: true,
      focus: "Jeu · C++",
      blurb: "Un jeu de plateforme 2D développé en C++ avec animation à base de sprites.",
      details: [
        "Personnage à base de sprites avec animations d'attente, course, saut, attaque et mort.",
        "Boucle de jeu, physique du joueur et système de points de vie en C++.",
      ],
      stack: ["C++"],
    },
  ],

  caseStudy: {
    id: "rubik",
    tag: "ÉTUDE DE CAS",
    name: "Solveur de Rubik's Cube",
    subtitle: "La vision par ordinateur rencontre un solveur déterministe",
    context:
      "Un projet solo : lire un Rubik's Cube physique à partir d'images et renvoyer les mouvements exacts pour le résoudre. Il se situe à l'intersection de deux choses que j'apprécie — la vision par ordinateur et la résolution algorithmique propre.",
    pipeline: [
      {
        step: "01",
        title: "Capture & détection",
        body: "La vision par ordinateur lit le cube face par face, localisant chaque facette et classifiant sa couleur sous un éclairage variable — la couche de perception qui transforme les pixels en un état structuré du cube.",
      },
      {
        step: "02",
        title: "Reconstruction de l'état",
        body: "Les facettes détectées sont assemblées en une représentation interne validée du cube, rejetant les configurations impossibles ou incohérentes avant la résolution.",
      },
      {
        step: "03",
        title: "Résolution",
        body: "Un algorithme de résolution calcule une séquence de mouvements valide menant de l'état capturé au cube résolu.",
      },
      {
        step: "04",
        title: "Sortie des mouvements",
        body: "La solution est renvoyée sous forme d'une séquence de mouvements claire, étape par étape, facile à suivre pour un humain.",
      },
    ],
    stack: ["Python", "OpenCV", "Vision par ordinateur", "Algorithme de résolution"],
    note: "Pas encore sur GitHub — documenté ici sous forme d'étude de cas écrite.",
  },

  education: [
    {
      degree: "Bachelier en informatique appliquée — Développement d'applications",
      school: "Haute École Louvain en Hainaut (HELHa)",
      period: "Sept. 2023 – Juil. 2026 (en cours)",
      place: "Mons, Belgique",
      note: "Génie logiciel & architecture, algorithmes & structures de données, bases de données, développement web & mobile, réseaux informatiques, systèmes d'exploitation, programmation orientée objet, machine learning, sécurité informatique, gestion de projet Agile.",
    },
    {
      degree: "Licence d'informatique — première année",
      school: "Université de Yaoundé I",
      period: "Sept. 2022 – Juil. 2023",
      place: "Yaoundé, Cameroun",
      note: "Mathématiques avancées, électronique & physique, et fondamentaux de la programmation.",
    },
    {
      degree: "Baccalauréat scientifique — Mathématiques & Physique",
      school: "Collège de La Retraite",
      period: "2022",
      place: "Yaoundé, Cameroun",
      note: "Mathématiques intensives (5h/sem.), physique (4h/sem.) et chimie.",
    },
  ],

  ui: {
    nav: {
      about: "À propos",
      work: "Projets",
      caseStudy: "Étude de cas",
      contact: "Contact",
      cv: "CV ↗",
    },
    hero: {
      viewWork: "Voir les projets",
      downloadCv: "Télécharger le CV",
      statusK: "Statut",
      statusV: "Disponible juil. 2026",
      basedK: "Basé à",
      stackK: "Stack principal",
      stackV: "Java · Python · TypeScript",
      contactK: "Contact",
    },
    sections: {
      about: { title: "Profil", label: "Qui je suis" },
      skills: { title: "Compétences", label: "Outils du métier" },
      work: { title: "Projets sélectionnés" },
      experience: { title: "Expérience", label: "Sur le terrain" },
      education: { title: "Formation", label: "Parcours académique" },
    },
    work: {
      countWord: "projets",
      kind: { Solo: "Solo", Team: "Équipe" },
      privateBadge: "Privé · sur demande",
    },
    caseStudy: { step: "ÉTAPE" },
    footer: {
      kicker: "§06 — Contact",
      headPre: "Construisons quelque chose de ",
      headEm: "fiable.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
      downloadCv: "Télécharger le CV",
      built: "Conçu & développé par Tetio Tsague · Next.js",
    },
    lang: { en: "EN", fr: "FR", switchAria: "Changer de langue" },
  },
};

/* ============================== EXPORTS ============================== */

export const content: Record<Lang, SiteContent> = { en, fr };
export default content;
