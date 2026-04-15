import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../../constants'
import { textVariant } from '../../utils/motion'
import SectionWrapper from '../../hoc/SectionWrapper'

function ExperienceCard({ exp }: { exp: typeof experiences[number] }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={exp.date}
      iconStyle={{ background: exp.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full text-2xl">
          {exp.icon}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
        <p className="text-ember text-[16px] font-semibold" style={{ margin: 0 }}>
          {exp.company}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {exp.points.map((point, i) => (
          <li key={i} className="text-white/60 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

function Experience() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">What I have done so far</p>
        <h2 className="section-head-text">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
