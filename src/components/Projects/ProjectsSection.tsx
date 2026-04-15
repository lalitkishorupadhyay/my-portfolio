import { forwardRef } from 'react'
const ProjectsSection = forwardRef<HTMLElement>((_props, ref) => (
  <section ref={ref} style={{ minHeight: '100vh', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Projects</section>
))
ProjectsSection.displayName = 'ProjectsSection'
export default ProjectsSection
