import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { slideIn } from '../../utils/motion'
import SectionWrapper from '../../hoc/SectionWrapper'
import StarsCanvas from '../canvas/Stars'
import avatar from '../../assets/avatar.jpg'

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || serviceId === 'your_service_id') {
      window.location.href = `mailto:lalitkishorupadhyay@gmail.com?subject=From ${form.name}&body=${form.message}`
      return
    }

    setLoading(true)
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        to_name: 'Lalit',
        from_email: form.email,
        to_email: 'lalitkishorupadhyay@gmail.com',
        message: form.message,
      }, publicKey)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Form */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl"
        style={{ background: '#151030' }}
      >
        <p className="section-sub-text">Get in touch</p>
        <h3 className="section-head-text">Contact.</h3>

        {sent ? (
          <div className="mt-10 flex flex-col items-center gap-4">
            <span className="text-6xl">✅</span>
            <p className="text-white text-xl font-semibold">Message sent!</p>
            <p className="text-white/50">I'll get back to you soon.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            {[
              { label: 'Your Name',    name: 'name',    type: 'text',  placeholder: 'John Doe' },
              { label: 'Your Email',   name: 'email',   type: 'email', placeholder: 'john@example.com' },
            ].map(field => (
              <label key={field.name} className="flex flex-col">
                <span className="text-white font-medium mb-4">{field.label}</span>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as 'name' | 'email']}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="py-4 px-6 rounded-lg outlined-none border-none font-medium text-white placeholder-white/30 text-[14px]"
                  style={{ background: '#232631' }}
                />
              </label>
            ))}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                required
                className="py-4 px-6 rounded-lg outlined-none border-none font-medium text-white placeholder-white/30 text-[14px] resize-none"
                style={{ background: '#232631' }}
              />
            </label>
            <button
              type="submit"
              className="py-3 px-8 outline-none w-fit font-bold shadow-md rounded-xl text-white hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                boxShadow: '0 0 15px rgba(251,146,60,0.4)',
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}

        {/* Contact links */}
        <div className="mt-8 flex flex-col gap-3">
          {[
            { icon: '✉', label: 'lalitkishorupadhyay@gmail.com',           href: 'mailto:lalitkishorupadhyay@gmail.com' },
            { icon: '📱', label: '(+91) 8619721800',                        href: 'tel:+918619721800' },
            { icon: '🐙', label: 'github.com/lalitkishorupadhyay',          href: 'https://github.com/lalitkishorupadhyay' },
            { icon: '💼', label: 'linkedin.com/in/lalit-upadhyay-84761222a', href: 'https://www.linkedin.com/in/lalit-upadhyay-84761222a/' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 text-white/60 hover:text-ember transition-colors text-sm"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Stars */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative rounded-2xl overflow-hidden"
        style={{ background: '#151030' }}
      >
        <StarsCanvas />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
          <div
            className="w-32 h-32 rounded-full overflow-hidden"
            style={{
              border: '3px solid rgba(251,146,60,0.6)',
              boxShadow: '0 0 30px rgba(251,146,60,0.35)',
            }}
          >
            <img src={avatar} alt="Lalit Kishor Upadhyay" className="w-full h-full object-cover" />
          </div>
          <p className="text-white/70 text-sm font-semibold tracking-wide">Lalit Kishor Upadhyay</p>
          <p className="text-white/50 text-xs tracking-widest uppercase">Full-Stack Software Engineer</p>
          <p className="text-white/30 text-xs">Open to opportunities</p>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
