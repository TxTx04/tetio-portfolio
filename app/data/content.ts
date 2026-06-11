/**
 * Central content source for the portfolio.
 * Everything the UI renders lives here so copy and structure stay in one place.
 */

export type Link = { label: string; href: string };

export const profile = {
  name: "Tetio Tsague",
  role: "Junior Software Engineer",
  initials: "TT",
  // Mono kicker shown above the hero headline
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
};

export const about = {
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
};

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
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
];

export type Experience = {
  role: string;
  org: string;
  note?: string;
  period: string;
  place: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
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
];

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

export const projects: Project[] = [
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
];

/** A deeper case study, highlighted on its own. */
export const caseStudy = {
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
};

export const education = [
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
];
