import { motion } from 'framer-motion'
import StarsCanvas from '../canvas/Stars'
import avatar from '../../assets/avatar.jpg'

export default function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <StarsCanvas />

      {/* Gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(83,52,131,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-8">
        {/* Orange accent line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-ember" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-ember to-transparent" />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm{' '}
            <span className="orange-text-gradient">Lalit Kishor</span>
          </h1>
          <p className="text-white/70 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            Full-Stack Software Engineer &mdash; React, Node.js &amp; Microservices
          </p>
          <p className="mt-4 text-white/50 max-w-xl text-[15px] leading-relaxed">
            Building scalable, high-performance, and user-centric applications.
            5+ years shipping production software across fintech, health, and e-commerce.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                color: 'white',
                boxShadow: '0 0 20px rgba(251,146,60,0.4)',
              }}
            >
              View Projects
            </a>
            <a
              href="/Lalit_Upadhyay_Resume.pdf"
              download
              className="px-8 py-3 rounded-xl font-semibold text-sm tracking-wide border border-white/20 text-white/80 hover:border-ember hover:text-ember transition-all"
            >
              Download CV
            </a>
            <a
              href="https://github.com/lalitkishorupadhyay"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm tracking-wide border border-white/20 text-white/80 hover:border-ember hover:text-ember transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lalit-upadhyay-84761222a/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm tracking-wide border border-white/20 text-white/80 hover:border-ember hover:text-ember transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="hidden lg:flex flex-col items-center justify-start mt-2 flex-shrink-0"
        >
          <div
            className="relative"
            style={{ width: 260, height: 260 }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #f97316, #fb923c, #fbbf24, #f97316)',
                padding: 3,
                borderRadius: '50%',
                boxShadow: '0 0 40px rgba(251,146,60,0.5), 0 0 80px rgba(251,146,60,0.2)',
              }}
            >
              <div
                className="w-full h-full rounded-full overflow-hidden"
                style={{ background: '#0f0f1a' }}
              >
                <img
                  src={avatar}
                  alt="Lalit Kishor Upadhyay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* AWS badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-3 -right-3 px-2 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1"
              style={{
                background: 'linear-gradient(135deg, #232f3e, #ff9900)',
                border: '1px solid rgba(255,153,0,0.6)',
                boxShadow: '0 0 12px rgba(255,153,0,0.4)',
              }}
            >
              <span>☁</span> AWS Certified
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white/30 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-ember"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
