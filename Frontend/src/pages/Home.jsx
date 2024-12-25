import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import ProjectSection from '../components/ProjectSection'
import Testimonials from '../components/Testimonials'
import ServicesSection from '../components/ServicesSection'

function Home() {
  return (
    <div className='w-screen min-h-screen m-0 p-0 font-inter'>
        <HeroSection />
        {/* <AboutSection /> */}
        <ServicesSection />
        <ProjectSection />
        {/* <ContactSection /> */}
        <Testimonials />
    </div>
  )
}

export default Home