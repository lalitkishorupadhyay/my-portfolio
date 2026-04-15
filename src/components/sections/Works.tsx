import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { projects } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import SectionWrapper from '../../hoc/SectionWrapper'

type Project = typeof projects[number]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1.02}
        transitionSpeed={450}
      >
        <div
          className="p-5 rounded-2xl sm:w-[360px] w-full"
          style={{ background: '#151030' }}
        >
          {/* Project emoji / image */}
          <div
            className="relative w-full h-[180px] rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(83,52,131,0.4), rgba(251,146,60,0.1))',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span className="text-7xl">{project.image}</span>

            {/* Live link icon */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
              <div
                onClick={() => window.open(project.live_link, '_blank')}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)' }}
                title="Live Demo"
              >
                <span className="text-sm">🌐</span>
              </div>
              <div
                onClick={() => window.open(project.source_code_link, '_blank')}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)' }}
                title="Source Code"
              >
                <span className="text-sm">⌨</span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
            <p className="mt-2 text-white/50 text-[14px] leading-[22px]">{project.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

function Works() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">My work</p>
        <h2 className="section-head-text">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('up', 'tween', 0.1, 1)}
          className="mt-3 text-white/60 text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through real-world applications.
          Each project is briefly described with links to live demos and source code.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
