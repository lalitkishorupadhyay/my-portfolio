import React from 'react'
import { motion } from 'framer-motion'
import * as Si from 'react-icons/si'
import { technologies } from '../../constants'
import { textVariant, fadeIn } from '../../utils/motion'
import SectionWrapper from '../../hoc/SectionWrapper'

type SiKey = keyof typeof Si

function TechCard({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  const IconComponent = Si[tech.icon as SiKey] as React.ElementType | undefined

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.05, 0.5)}
      className="flex flex-col items-center gap-3 group cursor-default"
    >
      <div
        className="w-20 h-20 xs:w-24 xs:h-24 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
        style={{
          background: `${tech.color}18`,
          border: `1.5px solid ${tech.color}40`,
          boxShadow: `0 0 0 0 ${tech.color}00`,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 18px 2px ${tech.color}55`
          ;(e.currentTarget as HTMLDivElement).style.borderColor = `${tech.color}99`
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${tech.color}00`
          ;(e.currentTarget as HTMLDivElement).style.borderColor = `${tech.color}40`
        }}
      >
        {IconComponent ? (
          <IconComponent size={38} color={tech.color} />
        ) : (
          <span className="text-2xl font-black" style={{ color: tech.color }}>
            {tech.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <p className="text-[12px] text-white/50 text-center group-hover:text-white/80 transition-colors">
        {tech.name}
      </p>
    </motion.div>
  )
}

function Tech() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">My stack</p>
        <h2 className="section-head-text">Technologies.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-8 mt-14">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
