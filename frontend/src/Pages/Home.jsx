import React from 'react'
import ServicesCards from '../Components/ServicesCards/ServicesCards'
import Testimonial from '../Components/Testimonial/Testimonial'
import Faq from '../Components/Faq/Faq'
import HeroSection from '../Components/Herosection/Herosection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <ServicesCards/>
      <Testimonial/>
      <Faq/>
    </div>
  )
}

export default Home
