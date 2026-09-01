// Profile content, distilled from ../../knowledge/. Facts trace back to
// knowledge/sources/cv-2026-08.md and the GitHub profile README.

export const profile = {
  name: 'Manuel Josué Malla Campoverde',
  shortName: 'Josué Malla',
  handle: 'jossuema',
  role: 'Machine Learning Engineer · Computer Vision',
  location: 'Machala, Ecuador',
  email: 'mmalla1@outlook.com',
  github: 'https://github.com/jossuema',
  // TODO(jossuema): add LinkedIn URL when ready
  linkedin: '',
  tagline:
    'I build computer vision systems that leave the lab — segmentation ' +
    'models on edge devices for shrimp farming, satellite imagery for ' +
    'mangrove monitoring, LiDAR for forest inventories.',
  about: [
    'I am an Information Technology student at Universidad Técnica de ' +
      'Machala (2022–2027) and a machine learning engineer at LarvIA, ' +
      'where I design, train and deploy vision models on edge devices to ' +
      'optimize shrimp farming across Ecuador and Latin America.',
    'On the research side, I was a Machine Learning & Data Science ' +
      'Research Intern at CNPEM — the Brazilian Nanotechnology National ' +
      'Laboratory — working on unsupervised learning for high-density ' +
      'electrochemical sensor data, and I maintain the reproducibility ' +
      'code for a manuscript on individual tree detection in airborne ' +
      'LiDAR submitted to Forests (MDPI). I presented at the LatinX in CV ' +
      'undergraduate consortium at CVPR 2024, where I received the best ' +
      'presentation award.',
  ],
  highlights: [
    { label: 'Best presentation · LatinX in CV, CVPR 2024' },
    { label: 'Research intern · CNPEM, Brazil' },
    { label: 'Manuscript submitted · Forests (MDPI)' },
  ],
};

export const experience = [
  {
    role: 'Machine Learning Engineer',
    org: 'LarvIA',
    kind: 'Part-time',
    where: 'Machala, Ecuador',
    when: 'Nov 2025 — Present',
    points: [
      'Development, training and deployment of computer vision models on edge devices.',
      'Optimization and improvement of legacy instance segmentation models.',
    ],
  },
  {
    role: 'ML & Data Science Research Intern',
    org: 'CNPEM — Brazilian Nanotechnology National Laboratory',
    kind: 'Research internship',
    where: 'Campinas, Brazil',
    when: 'Jan — Feb 2026',
    points: [
      'Analysis of high-density electrochemical sensor data.',
      'Unsupervised clustering of electrochemical reaction signals.',
      'Multi-label classification models for sensor-related patterns.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    org: 'LarvIA',
    kind: 'Internship',
    where: 'Machala, Ecuador',
    when: 'May — Oct 2025',
    points: [
      'ML pipelines for shrimp farming optimization in Ecuador and Latin America.',
      'Instance segmentation models from images of shrimp feed.',
      'Photogrammetry with OpenCV for metric measurements from smartphone images.',
    ],
  },
  {
    role: 'Junior Full-Stack Developer',
    org: 'Freelance',
    kind: 'Contract',
    where: 'Machala, Ecuador',
    when: 'Feb — May 2025',
    points: [
      'Business administrative dashboard with Next.js and Azure AD authentication.',
      'Backend CRUD services with PostgreSQL, NestJS and TypeORM migrations.',
      'WhatsApp booking chatbot using the OpenAI API.',
    ],
  },
  {
    role: 'Software Developer Intern',
    org: 'UTMACH — IT Department',
    kind: 'Internship',
    where: 'Machala, Ecuador',
    when: 'Oct 2024 — Feb 2025',
    points: [
      'Architecture of SISCA, an intelligent access control system for campus classrooms.',
      'Mobile app design for professor and staff classroom access.',
      'Optimized real-time facial authentication efficiency using machine learning.',
    ],
  },
];

export const research = [
  {
    title: 'TreeSeg-ALS — individual tree detection in airborne LiDAR',
    venue: 'Forests (MDPI) · manuscript submitted',
    description:
      'Inventory-anchored evaluation of deep-learning tree detection in ' +
      'ALS point clouds, with label-efficient cross-domain transfer in ' +
      'alpine forests. Public reproducibility code (PyTorch, PointNet++).',
    link: 'https://github.com/jossuema/treeseg-als',
    linkLabel: 'Reproducibility code',
  },
  {
    title: 'ML for high-density electrochemical sensors',
    venue: 'CNPEM · Campinas, Brazil · 2026',
    description:
      'Unsupervised clustering of electrochemical reaction signals and ' +
      'multi-label classification of sensor-related patterns, during a ' +
      'research internship at the Brazilian Nanotechnology National Laboratory.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Extended abstract — LatinX in CV @ CVPR 2024',
    venue: 'Seattle, USA · best presentation award',
    description:
      'Selected extended abstract, presented at the undergraduate ' +
      'consortium with a travel scholarship from the Computer Vision ' +
      'Foundation.',
    link: '',
    linkLabel: '',
  },
];

export const education = [
  {
    degree: 'B.Sc. Information Technology',
    org: 'Universidad Técnica de Machala',
    where: 'Machala, Ecuador',
    when: '2022 — 2027',
  },
  {
    degree: 'Data Driven Decision Specialist',
    org: 'ESPOL',
    where: 'Guayaquil, Ecuador',
    when: '2025 — 2026',
  },
  {
    degree: 'Summer Program, Applied Mathematics',
    org: 'FGV EMAp',
    where: 'Rio de Janeiro, Brazil',
    when: '2024',
  },
  {
    degree: 'KHIPU — Latin American Meeting in AI',
    org: 'Participation scholarship',
    where: 'Santiago, Chile',
    when: '2025',
  },
];

export const awards = [
  { what: 'Best presentation — projects hackathon, EPIC VI Programming School', year: '2026' },
  { what: 'Best presentation — undergraduate consortium, LatinX in CV @ CVPR', year: '2024' },
  { what: 'Selected extended abstract — LatinX in CV @ CVPR', year: '2024' },
  { what: 'Travel & registration scholarship — Computer Vision Foundation', year: '2024' },
  { what: '1st place — UTMACH Challenge', year: '2024' },
  { what: '1st place — Fall AI Project Competition (MLSA)', year: '2024' },
  { what: 'Travel & accommodation scholarship — FGV EMAp', year: '2025' },
  { what: 'Participation scholarship — KHIPU, Santiago', year: '2025' },
  { what: 'Program scholarship — Data Driven Decision Specialist, ESPOL', year: '2025' },
  { what: 'Selected research proposal — TaReCDa/ReWARDS', year: '2023' },
];

export const skills = [
  {
    group: 'ML / Computer Vision',
    items: ['PyTorch', 'TensorFlow · TFLite', 'Scikit-learn', 'OpenCV', 'YOLO', 'JAX', 'Edge deployment'],
  },
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'Java', 'C#', 'SQL', 'Julia', 'C', 'Kotlin'],
  },
  {
    group: 'Backend / Web',
    items: ['FastAPI', 'NestJS', 'Next.js', 'Django', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    group: 'Mobile / IoT',
    items: ['Jetpack Compose', 'SwiftUI', 'React Native', 'Flutter', 'ESP32 · BLE'],
  },
  {
    group: 'Infra / Data',
    items: ['Docker', 'Kubernetes', 'Azure', 'Jenkins', 'Power BI', 'Tableau'],
  },
];

export const community = [
  { what: 'Student Representative, Higher Education Assembly — UTMACH', when: '2025 — Present' },
  { what: 'Microsoft Learn Student Ambassador', when: '2024 — Present' },
  { what: 'Volunteer staff — PhawAI + TaReCDa 2025, Arequipa', when: '2025' },
  { what: 'Volunteer staff — Somos NLP challenge', when: '2025' },
  { what: 'Python teacher — Municipio de Huaquillas', when: '2025' },
  { what: 'Speaker — FLISOL 2026 (YOLO + SAHI)', when: '2026' },
];

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'Portuguese', level: 'B1' },
];
