import { forwardRef } from 'react'
const SkillsSection = forwardRef<HTMLElement>((_props, ref) => (
  <section ref={ref} style={{ minHeight: '100vh', background: '#0f3460', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Skills</section>
))
SkillsSection.displayName = 'SkillsSection'
export default SkillsSection
