'use client'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import CaseStudySection from '@/components/CaseStudySection'
import ProcessSection from '@/components/ProcessSection'
import ContactSection from '@/components/ContactSection'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CaseStudySection />
        <ProcessSection />
        <ContactSection />
      </main>
    </>
  )
}
