import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Testimonial.css'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { FaStar } from 'react-icons/fa'

function Testimonial() {
  const [showAll, setShowAll] = useState(false);
  const testimonials = [
    {
      review: "WebZin gave us exactly what we needed, super quickly too!",
      name: "Rahul Mehta",
      role: "CEO of CraftNest",
      rating: 5
    },
    {
      review: "Impressive design skills! They brought our vision to life through sharp and modern designs.",
      name: "Ananya Das",
      role: "Founder of PixelNinja",
      rating: 5
    },
    {
      review: "Really happy with the results. Clean work and fast deployment!",
      name: "Mr. Roy",
      role: "PM of DesignStudio",
      rating: 5
    },
    {
      review: "Fantastic experience from start to finish. Professional and responsive throughout!",
      name: "Sneha Kapoor",
      role: "Marketing Head of BrandVerse",
      rating: 5
    }
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <div className="testimonial-section">
      {/* Header with Motion */}
      <motion.div 
        className="testimonial-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="testimonial-subtitle">CLIENT FEEDBACK</span>
        <h1 className="testimonial-title">What Our Clients Say</h1>
        <div className="title-underline"></div>
      </motion.div>

      {/* First Row of Testimonials */}
      <motion.div 
        className="testimonial-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {firstRow.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="quote-icon">
              <RiDoubleQuotesL className="quote-left" />
              <RiDoubleQuotesR className="quote-right" />
            </div>
            <p className="testimonial-review">{testimonial.review}</p>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={`star ${i < testimonial.rating ? 'filled' : ''}`} 
                />
              ))}
            </div>
            <div className="client-info">
              <h4 className="client-name">{testimonial.name}</h4>
              <p className="client-role">{testimonial.role}</p>
            </div>
            <div className="testimonial-card-bg"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More Button */}
      {!showAll && secondRow.length > 0 && (
        <motion.div 
          className="testimonial-see-more-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            className="testimonial-see-more-btn btn-primary" 
            onClick={() => setShowAll(true)}
          >
            See More
          </button>
        </motion.div>
      )}

      {/* Second Row and See Less Button */}
      {showAll && (
        <>
          <motion.div 
            className="testimonial-container testimonial-container-second-row spaced-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {secondRow.map((testimonial, index) => (
              <motion.div
                key={index + 3}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="quote-icon">
                  <RiDoubleQuotesL className="quote-left" />
                  <RiDoubleQuotesR className="quote-right" />
                </div>
                <p className="testimonial-review">{testimonial.review}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`star ${i < testimonial.rating ? 'filled' : ''}`} 
                    />
                  ))}
                </div>
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-role">{testimonial.role}</p>
                </div>
                <div className="testimonial-card-bg"></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="testimonial-see-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button 
              className="testimonial-see-more-btn btn-primary" 
              onClick={() => setShowAll(false)}
            >
              See Less
            </button>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default Testimonial
