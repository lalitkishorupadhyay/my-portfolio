import { motion } from 'framer-motion'
import StarsCanvas from '../canvas/Stars'

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

      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        {/* Orange accent line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-ember" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-ember to-transparent" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm{' '}
            <span className="orange-text-gradient">Lalit Kishor</span>
          </h1>
          <p className="text-white/70 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            Full Stack Developer &mdash; React, Node.js &amp; Cloud
          </p>
          <p className="mt-4 text-white/50 max-w-xl text-[15px] leading-relaxed">
            Building scalable web applications with modern tech stacks.
            ~5 years shipping production software across fintech, health, and e-commerce.
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
          </div>
        </div>
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
