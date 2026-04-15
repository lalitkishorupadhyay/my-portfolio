import { forwardRef } from 'react'
const AboutSection = forwardRef<HTMLElement>((_props, ref) => (
  <section ref={ref} style={{ minHeight: '100vh', background: '#16213e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>About</section>
))
AboutSection.displayName = 'AboutSection'
export default AboutSection
