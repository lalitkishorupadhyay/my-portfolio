import { forwardRef } from 'react'
const ContactSection = forwardRef<HTMLElement>((_props, ref) => (
  <section ref={ref} style={{ minHeight: '100vh', background: '#0f3460', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Contact</section>
))
ContactSection.displayName = 'ContactSection'
export default ContactSection
