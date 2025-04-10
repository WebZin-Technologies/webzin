import React from 'react'
import './FooterSection.css'
import Logo from '../../Assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

function FooterSection() {
  const navigate = useNavigate()
  return (
    <div className="footer-section">
      <div className="main-footer">
        <div className="logo-section">
          <img src={Logo} alt="WebZin" className='footer-logo'/>
        </div>

        <div className="nav-links">
          <Link to='/' className='footer-link'>Home</Link>
          <Link to='/about' className='footer-link'>About</Link>
          <Link to='/contact' className='footer-link'>Contact</Link>
          <Link to='/blog' className='footer-link'>Blog</Link>
        </div>

        <div className="social-icons">
        <FaInstagram onClick={() => window.open('https://www.instagram.com/webzin.dev', '_blank')} />
          <FaLinkedin onClick={() => window.open('https://linkedin.com/company/webzin-technologies', '_blank')}/>
          <FaGithub onClick={() => window.open('https://github.com/WebZin-Technologies', '_blank')}/>
          <SiGmail onClick={() => window.open('mailto:webzin.dev@gmail.com', '_blank')}/>
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
