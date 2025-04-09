import React from 'react'
import './FooterSection.css'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

function FooterSection() {
  return (
    <div className="footer-section">
      <div className="main-footer">
        <div className="logo-section">
          <img src={Logo} alt="WebZin" className='footer-logo'/>
        </div>

        <div className="nav-links">
          <Link to='/' className='footer-link'>Home</Link>
          <Link to='/services' className='footer-link'>Services</Link>
          <Link to='/about' className='footer-link'>About</Link>
          <Link to='/contact' className='footer-link'>Contact</Link>
        </div>

        <div className="social-icons">
          <FaInstagram/> 
          <FaLinkedin/>
          <FaGithub/>
          <SiGmail/>
        </div>
      </div>

      <hr className="footer-line" />

      <p className="text-center text-white text-base mt-4">
        &copy; {new Date().getFullYear()} WebZin. All rights reserved.
      </p>
    </div>
  ) 
}

export default FooterSection
