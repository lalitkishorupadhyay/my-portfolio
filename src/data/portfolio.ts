export const person = {
  name: 'Lalit Kishor Upadhyay',
  initials: 'LK',
  role: 'Full Stack Developer',
  tagline:
    'Building scalable web applications with React, Node.js & modern cloud infrastructure. ~5 years of turning ideas into production-grade software.',
  email: 'lalitkishorupadhyay@gmail.com',
  phone: '(+91) 8619721800',
  github: '[YOUR_GITHUB_URL]',
  linkedin: '[YOUR_LINKEDIN_URL]',
  cvUrl: '/Lalit_Upadhyay_Resume.pdf',
}

export const about = {
  bio: [
    'Full Stack Developer with ~5 years of experience architecting and shipping MERN stack applications. I have led full rewrites from legacy PHP to modern Next.js/Node.js systems, built React component libraries, and deployed microservices on AWS.',
    'Outside of code — I competed at the national level in badminton, which gives me the same drive I bring to software: discipline, iteration, and never settling.',
  ],
  stats: [
    { value: '5+', label: 'Years Exp' },
    { value: '3', label: 'Companies' },
    { value: '5', label: 'Projects' },
    { value: '15+', label: 'Technologies' },
  ],
  current:
    'Full Stack Dev @ Excel One Stop Solution — building fintech products with Next.js & microservices',
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
      { name: 'TypeScript' },
      { name: 'Redux' },
      { name: 'React Query' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'RESTful APIs' },
      { name: 'Microservices' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Jenkins' },
      { name: 'AWS EC2' },
      { name: 'Nginx' },
      { name: 'Storybook' },
      { name: 'Rollup.js' },
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

export const sections = ['Hero', 'About', 'Skills', 'Experience', 'Projects', 'Contact']
