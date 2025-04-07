import React from 'react'
import NavbarSection from '../Components/NavbarSection/NavbarSection'
import Herosection from '../Components/Herosection/Herosection'
import ServicesCards from '../Components/ServicesCards/ServicesCards'
import Testimonial from '../Components/Testimonial/Testimonial'
import Faq from '../Components/Faq/Faq'
import FooterSection from '../Components/FooterSection/FooterSection'

function Home() {
  return (
    <div>
      <NavbarSection/>
      <Herosection/>
      <ServicesCards/>
      <Testimonial/>
      <Faq/>
      <FooterSection/>
    </div>
  )
}

export default Home
