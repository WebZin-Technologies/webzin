import React from 'react';
import './FooterSection.css';
import Logo from '../../Assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';

// Variants for better animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function FooterSection() {
  return (
    <motion.div 
      className="footer-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: true }}
    >
      <div className="main-footer">
        
        {/* Logo */}
        <motion.div 
          className="logo-section"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <img src={Logo} alt="WebZin" className='footer-logo' />
        </motion.div>

        {/* Nav Links */}
        <motion.div 
          className="nav-links"
          variants={itemVariants}
        >
          <Link to='/' className='footer-link'>Home</Link>
          <Link to='/portfolio' className='footer-link'>Portfolio</Link>
          <Link to='/about' className='footer-link'>About</Link>
          <Link to='/contact' className='footer-link'>Contact</Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="social-icons"
          variants={itemVariants}
        >
          <div className="social-icon" onClick={() => window.open('https://www.instagram.com/webzin.dev', '_blank')}>
            <FaInstagram />
          </div>
          <div className="social-icon" onClick={() => window.open('https://linkedin.com/company/webzin-technologies', '_blank')}>
            <FaLinkedin />
          </div>
          <div className="social-icon" onClick={() => window.open('https://wa.me/message/KP3LZZ5A5PWXH1', '_blank')}>
            <FaWhatsapp />
          </div>
          <div className="social-icon" onClick={() => window.open('mailto:webzin.dev@gmail.com', '_blank')}>
            <SiGmail />
          </div>
        </motion.div>

      </div>

      <hr className="footer-line" />

      <motion.p 
        className="text-center text-white text-base mt-4"
        variants={itemVariants}
      >
        &copy; {new Date().getFullYear()} WebZin. All rights reserved.
      </motion.p>
    </motion.div>
  )
}

export default FooterSection;
