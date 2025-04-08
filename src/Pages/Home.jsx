import React from 'react'
import NavbarSection from '../Components/NavbarSection/NavbarSection'
import ServicesCards from '../Components/ServicesCards/ServicesCards'
import Testimonial from '../Components/Testimonial/Testimonial'
import Faq from '../Components/Faq/Faq'
import FooterSection from '../Components/FooterSection/FooterSection'
import HeroSection from '../Components/Herosection/Herosection'

function Home() {
  return (
    <div>
      <NavbarSection/>
      <HeroSection/>
      <ServicesCards/>
      <Testimonial/>
      <Faq/>
      <FooterSection/>
    </div>
  )
}

export default Home
