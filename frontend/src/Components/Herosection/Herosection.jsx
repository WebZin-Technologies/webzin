import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import './Herosection.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__content">

        {/* Title with motion */}
        <motion.h1 
          className="hero__title"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Your Vision, <span>Our Code</span>
        </motion.h1>

        {/* Subtitle with motion */}
        <motion.p 
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transforming visions into digital reality — WebZin crafts custom websites
          that captivate, convert, and elevate your online presence
        </motion.p>

        <motion.div 
          className="hero__buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Button 1 */}
          <motion.button 
            className="hero__cta focus:outline-none focus:ring-0 border-none" 
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote <FaAngleRight className="hero__cta-icon" />
          </motion.button>

          {/* Button 2 */}
          <motion.button 
            className="hero__cta hero__cta--portfolio focus:outline-none focus:ring-0 border-none" 
            onClick={() => navigate('/portfolio')}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio <FaAngleRight className="hero__cta-icon" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
