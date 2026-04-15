import { forwardRef } from 'react'
const ExperienceSection = forwardRef<HTMLElement>((_props, ref) => (
  <section ref={ref} style={{ minHeight: '100vh', background: '#533483', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Experience</section>
))
ExperienceSection.displayName = 'ExperienceSection'
export default ExperienceSection
