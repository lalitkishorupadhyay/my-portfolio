import { useEffect, useRef, useState } from 'react'
import { sections } from '@/data/portfolio'
import SideDotNav from '@/components/Nav/SideDotNav'
import HeroSection from '@/components/Hero/HeroSection'
import AboutSection from '@/components/About/AboutSection'
import SkillsSection from '@/components/Skills/SkillsSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'
import ContactSection from '@/components/Contact/ContactSection'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  const setRef = (i: number) => (el: HTMLElement | null) => {
    sectionRefs.current[i] = el
  }

  return (
    <>
      <SideDotNav
        sections={sections}
        activeIndex={activeIndex}
        onDotClick={scrollToSection}
      />
      <div id="snap-root">
        <HeroSection ref={setRef(0)} onViewProjects={() => scrollToSection(4)} />
        <AboutSection ref={setRef(1)} />
        <SkillsSection ref={setRef(2)} />
        <ExperienceSection ref={setRef(3)} />
        <ProjectsSection ref={setRef(4)} />
        <ContactSection ref={setRef(5)} />
      </div>
    </>
  )
}
