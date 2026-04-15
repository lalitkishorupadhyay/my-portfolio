export const navLinks = [
  { id: 'about',      title: 'About' },
  { id: 'work',       title: 'Work' },
  { id: 'projects',   title: 'Projects' },
  { id: 'contact',    title: 'Contact' },
]

export type Service = { title: string; icon: string }
export const services: Service[] = [
  { title: 'React / Next.js Developer', icon: '⚛️' },
  { title: 'Node.js + Sequelize + MySQL', icon: '🟢' },
  { title: 'Microservices & Micro-Frontend', icon: '🧩' },
  { title: 'DevOps — Docker, K8s, CI/CD', icon: '☁️' },
]

export type Technology = { name: string; color: string; icon: string }
export const technologies: Technology[] = [
  { name: 'React',        color: '#61dafb', icon: 'SiReact' },
  { name: 'Next.js',      color: '#ffffff', icon: 'SiNextdotjs' },
  { name: 'TypeScript',   color: '#3178c6', icon: 'SiTypescript' },
  { name: 'JavaScript',   color: '#f7df1e', icon: 'SiJavascript' },
  { name: 'Redux',        color: '#764abc', icon: 'SiRedux' },
  { name: 'React Query',  color: '#ff4154', icon: 'SiReactquery' },
  { name: 'Node.js',      color: '#8cc84b', icon: 'SiNodedotjs' },
  { name: 'Express.js',   color: '#aaaaaa', icon: 'SiExpress' },
  { name: 'MongoDB',      color: '#47a248', icon: 'SiMongodb' },
  { name: 'MySQL',        color: '#4479a1', icon: 'SiMysql' },
  { name: 'Sequelize',    color: '#52b0e7', icon: 'SiSequelize' },
  { name: 'Docker',       color: '#0db7ed', icon: 'SiDocker' },
  { name: 'Kubernetes',   color: '#326ce5', icon: 'SiKubernetes' },
  { name: 'AWS',          color: '#ff9900', icon: 'SiAmazonwebservices' },
  { name: 'Jenkins',      color: '#d33834', icon: 'SiJenkins' },
]

export type Experience = {
  title: string
  company: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}
export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Excel One Stop Solution Pvt. Ltd.',
    icon: '💼',
    iconBg: 'rgba(251,146,60,0.15)',
    date: 'November 2023 – Present',
    points: [
      'Converted A2ZSuvidhaa from PHP to a modern stack using Next.js (frontend) and Node.js (backend).',
      'Implemented microservices architecture to enhance scalability, maintainability, and performance.',
      'Developed and integrated RESTful APIs for seamless communication between services.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Valley Startup Consultants Pvt. Ltd.',
    icon: '💼',
    iconBg: 'rgba(167,139,250,0.15)',
    date: 'June 2022 – November 2023',
    points: [
      'Built responsive, user-friendly interfaces using React ensuring a seamless user experience.',
      'Worked in an Agile environment with sprint planning, stand-ups, and retrospectives.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Grass Solution Pvt. Ltd.',
    icon: '💼',
    iconBg: 'rgba(96,165,250,0.15)',
    date: 'August 2020 – May 2022',
    points: [
      'Transitioned several applications from legacy technologies to the MERN stack.',
      'Implemented secure user authentication and authorization using JWT.',
      'Deployed applications to cloud platforms like AWS (EC2, S3).',
    ],
  },
]

export type Project = {
  name: string
  description: string
  tags: { name: string; color: string }[]
  image: string
  source_code_link: string
  live_link: string
}
export const projects: Project[] = [
  {
    name: 'A2Z Suvidhaa',
    description:
      'Fintech platform for finance & banking offering comprehensive services. Features responsive multi-language UI in Next.js with dark/light mode and a microservices Node.js backend.',
    tags: [
      { name: 'next.js',       color: 'blue-text-gradient' },
      { name: 'node.js',       color: 'green-text-gradient' },
      { name: 'mongodb',       color: 'green-text-gradient' },
      { name: 'microservices', color: 'pink-text-gradient' },
    ],
    image: '💳',
    source_code_link: 'https://github.com',
    live_link: 'https://partners.atozsuvidhaa.com',
  },
  {
    name: 'Nifty Trader',
    description:
      'Comprehensive React component library for reusable UI components. Built with Storybook for interactive documentation, Rollup.js for bundling, and published as an npm package.',
    tags: [
      { name: 'react',     color: 'blue-text-gradient' },
      { name: 'storybook', color: 'pink-text-gradient' },
      { name: 'rollup.js', color: 'orange-text-gradient' },
      { name: 'npm',       color: 'green-text-gradient' },
    ],
    image: '📈',
    source_code_link: 'https://github.com',
    live_link: 'https://www.niftytrader.in',
  },
  {
    name: 'Medylocums',
    description:
      'Health & care platform connecting medical professionals with healthcare institutions. Built with a modern React frontend and Node.js backend.',
    tags: [
      { name: 'react',   color: 'blue-text-gradient' },
      { name: 'node.js', color: 'green-text-gradient' },
    ],
    image: '🏥',
    source_code_link: 'https://github.com',
    live_link: 'https://staging-medylocums.appdesignproject.ie/',
  },
  {
    name: 'Muse POS',
    description:
      'Point-of-sale system with full stack development and cloud deployment on AWS. Handles inventory, billing, and reporting.',
    tags: [
      { name: 'react',   color: 'blue-text-gradient' },
      { name: 'node.js', color: 'green-text-gradient' },
      { name: 'aws',     color: 'orange-text-gradient' },
    ],
    image: '🛒',
    source_code_link: 'https://github.com',
    live_link: 'https://www.musepos.com',
  },
  {
    name: 'Apna Mandir',
    description:
      'Admin and sub-admin panel for managing temple operations, including event scheduling, donation tracking, and user management.',
    tags: [
      { name: 'react',   color: 'blue-text-gradient' },
      { name: 'node.js', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
    ],
    image: '🛕',
    source_code_link: 'https://github.com',
    live_link: '#',
  },
]
