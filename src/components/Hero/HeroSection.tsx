import { forwardRef } from 'react'
type Props = { onViewProjects: () => void }
const HeroSection = forwardRef<HTMLElement, Props>((_props, ref) => (
  <section ref={ref} style={{ minHeight: '100vh', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Hero</section>
))
HeroSection.displayName = 'HeroSection'
export default HeroSection
