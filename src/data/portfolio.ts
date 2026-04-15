export const person = {
  name: 'Lalit Kishor Upadhyay',
  initials: 'LK',
  role: 'Full-Stack Software Engineer',
  tagline:
    'Building scalable, high-performance, and user-centric applications with React, Node.js & microservices. 5+ years turning ideas into production-grade software.',
  email: 'lalitkishorupadhyay@gmail.com',
  phone: '(+91) 8619721800',
  github: 'https://github.com/lalitkishorupadhyay',
  linkedin: 'https://www.linkedin.com/in/lalit-upadhyay-84761222a/',
  cvUrl: '/Lalit_Upadhyay_Resume.pdf',
}

export const about = {
  bio: [
    'Full-Stack Software Engineer with 5+ years of experience building scalable, high-performance, and user-centric applications. My core expertise is in JavaScript — React on the frontend and Node.js with Sequelize & MySQL on the backend.',
    'I have hands-on experience with microservices, micro-frontend architectures, Docker, Kubernetes, and CI/CD pipelines, along with a solid grounding in networking fundamentals. Currently expanding into data engineering to deepen my understanding of large-scale data pipelines and system design.',
    'Outside of code — I competed at the national level in badminton, which gives me the same drive I bring to software: discipline, iteration, and never settling.',
  ],
  stats: [
    { value: '5+', label: 'Years Exp' },
    { value: '3',  label: 'Companies' },
    { value: '5',  label: 'Projects' },
    { value: '15+', label: 'Technologies' },
  ],
  current:
    'Full-Stack Engineer @ Excel One Stop Solution — building fintech products with Next.js, Node.js & microservices',
}

export type SkillCategory = {
  title: string
  skills: { name: string; highlight?: boolean }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'TypeScript' },
      { name: 'Redux' },
      { name: 'React Query' },
      { name: 'Micro-Frontend' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'Sequelize', highlight: true },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'RESTful APIs' },
      { name: 'Microservices' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'CI/CD Pipelines' },
      { name: 'AWS EC2' },
      { name: 'Nginx' },
      { name: 'Networking' },
      { name: 'Storybook' },
    ],
  },
  {
    title: 'Learning',
    skills: [
      { name: 'Data Engineering' },
      { name: 'Data Pipelines' },
      { name: 'System Design' },
    ],
  },
]

export type Job = {
  role: string
  company: string
  period: string
  dotColor: string
  bullets: string[]
}

export const jobs: Job[] = [
  {
    role: 'Full Stack Developer',
    company: 'Excel One Stop Solution Pvt. Ltd.',
    period: 'Nov 2023 — Present',
    dotColor: '#fb923c',
    bullets: [
      'Migrated A2ZSuvidhaa from PHP to Next.js + Node.js',
      'Implemented microservices architecture for scalability',
      'Developed and integrated RESTful APIs across services',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Valley Startup Consultants Pvt. Ltd.',
    period: 'Jun 2022 — Nov 2023',
    dotColor: '#a78bfa',
    bullets: [
      'Built responsive UIs with React in Agile teams',
      'Sprint planning, stand-ups, and retrospectives',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Grass Solution Pvt. Ltd.',
    period: 'Aug 2020 — May 2022',
    dotColor: '#60a5fa',
    bullets: [
      'Migrated legacy applications to MERN stack',
      'Implemented JWT authentication and authorization',
      'Deployed applications to AWS (EC2, S3)',
    ],
  },
]

export type Project = {
  name: string
  description: string
  tags: string[]
  url: string
}

export const projects: Project[] = [
  {
    name: 'A2Z Suvidhaa',
    description:
      'Fintech platform for finance & banking. Multi-language Next.js UI with dark/light mode + Node.js microservices backend.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Microservices'],
    url: 'https://partners.atozsuvidhaa.com',
  },
  {
    name: 'Nifty Trader',
    description:
      'React component library with Storybook docs, Rollup.js bundling & published as an npm package.',
    tags: ['React', 'Storybook', 'Rollup.js', 'npm'],
    url: 'https://www.niftytrader.in',
  },
  {
    name: 'Medylocums',
    description:
      'Health & care platform connecting medical professionals with healthcare institutions.',
    tags: ['React', 'Node.js'],
    url: 'https://staging-medylocums.appdesignproject.ie/',
  },
  {
    name: 'Muse POS',
    description:
      'Point of sale system — full stack development and cloud deployment on AWS.',
    tags: ['React', 'Node.js', 'AWS'],
    url: 'https://www.musepos.com',
  },
]

export type Certification = {
  name: string
  issuer: string
  date: string
  expiryDate?: string
  credentialId?: string
  verifyUrl?: string
  credlyUrl?: string
  pdfUrl?: string
  badgeColor: string
  icon: string
  badgeImage?: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'March 15, 2026',
    expiryDate: 'March 15, 2029',
    credentialId: '151ffdeef1af479eb32a467d0aab9e64',
    credlyUrl: 'https://www.credly.com/badges/15114b69-725b-4704-9a77-e5488dab460f/public_url',
    verifyUrl: 'https://aws.amazon.com/verification',
    pdfUrl: '/AWS_Certified_AI_Practitioner.pdf',
    badgeColor: '#ff9900',
    icon: '☁️',
    badgeImage: '/aws-badge.png',
  },
  {
    name: 'Agentic AI',
    issuer: 'DeepLearning.AI',
    date: 'March 24, 2026',
    credentialId: 'd022a06b-b6ae-45c4-9a93-ad8ddcbf3a96',
    verifyUrl: 'https://learn.deeplearning.ai/certificates/d022a06b-b6ae-45c4-9a93-ad8ddcbf3a96',
    badgeColor: '#e05c7e',
    icon: '🤖',
  },
]

export const sections = ['Hero', 'About', 'Skills', 'Experience', 'Projects', 'Contact']
