import React from 'react'
import './Testimonial.css'
import { RiDoubleQuotesL } from 'react-icons/ri'

function Testimonial() {
  const testimonials = [
    {
      review: "WebZin gave us exactly what we needed, super quickly too!",
      name: "Rahul Mehta",
      role: "CEO of CraftNest"
    },
    {
      review: "Impressive design skills! They brought our vision to life through sharp and modern designs.",
      name: "Ananya Das",
      role: "Founder of PixelNinja"
    },
    {
      review: "Really happy with the results. Clean work and fast deployment!",
      name: "Mr. Roy",
      role: "PM of DesignStudio"
    },
    {
      review: "Fantastic experience from start to finish. Professional and responsive throughout!",
      name: "Sneha Kapoor",
      role: "Marketing Head of BrandVerse"
    }
  ];

  return (
    <div className="testimonial">
      <div className="text-center mb-12 relative">
        <h1 className="section-title-w">What Our Clients Say</h1>
      </div>

      <div className="testimonial-scroll-container lg:grid lg:grid-cols-4 lg:gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="icon-container">
              <RiDoubleQuotesL className='testimonial-icon' />
            </div>

            <p className="testimonial-text">{testimonial.review}</p>

            <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>

            <h6 className="testimonial-name">
              {testimonial.name}<br />{testimonial.role}
            </h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
