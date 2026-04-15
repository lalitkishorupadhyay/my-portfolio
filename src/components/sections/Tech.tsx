import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { BallCanvas } from '../canvas'
import { technologies } from '../../constants'
import { textVariant } from '../../utils/motion'
import SectionWrapper from '../../hoc/SectionWrapper'

function Tech() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">My stack</p>
        <h2 className="section-head-text">Technologies.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-14">
        {technologies.map(tech => (
          <Suspense key={tech.name} fallback={
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 xs:w-24 xs:h-24 rounded-full" style={{ background: tech.color + '22', border: `1px solid ${tech.color}44` }} />
              <p className="text-[12px] text-white/60">{tech.name}</p>
            </div>
          }>
            <BallCanvas color={tech.color} name={tech.name} />
          </Suspense>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
