import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { services } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import SectionWrapper from '../../hoc/SectionWrapper'

function ServiceCard({ title, icon, index }: { title: string; icon: string; index: number }) {
  return (
    <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        style={{
          background: 'linear-gradient(135deg, rgba(251,146,60,0.3), rgba(167,139,250,0.3))',
        }}
      >
        <div
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          style={{ background: '#151030' }}
        >
          <div className="text-6xl">{icon}</div>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('up', 'tween', 0.1, 1)}
        className="mt-4 text-white/60 text-[17px] max-w-3xl leading-[30px]"
      >
        Full Stack Developer with ~5 years of experience architecting and shipping MERN stack
        applications. I've led full rewrites from legacy PHP to modern Next.js/Node.js systems,
        built React component libraries published to npm, and deployed microservices on AWS.
        <br /><br />
        Outside of code — I competed at the national level in badminton, which gives me the same
        drive I bring to software: discipline, iteration, and never settling.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {services.map((s, i) => (
          <ServiceCard key={s.title} index={i} title={s.title} icon={s.icon} />
        ))}
      </div>

      {/* Quick stats */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.6, 0.75)}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
      >
        {[
          { value: '5+', label: 'Years Experience' },
          { value: '3',  label: 'Companies' },
          { value: '5',  label: 'Projects Shipped' },
          { value: '15+',label: 'Technologies' },
        ].map(stat => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl"
            style={{
              background: 'rgba(251,146,60,0.08)',
              border: '1px solid rgba(251,146,60,0.2)',
            }}
          >
            <span className="text-ember text-4xl font-black">{stat.value}</span>
            <span className="text-white/50 text-sm mt-1 text-center">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, 'about')
