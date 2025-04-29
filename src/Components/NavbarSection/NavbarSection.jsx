import React, { useState } from 'react'
import './NavbarSection.css'
import Logo from '../../Assets/Logo.png'
import { useNavigate, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

function NavbarSection() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (path) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home'
    }
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#4728c7' }} variant="dark">
      <Container style={{ padding: '0 2rem' }}>
        {/* Logo on the left */}
        <Navbar.Brand onClick={() => navigate('/')} style={{ padding: 0, cursor: 'pointer' }}>
          <img
            alt="WebZin"
            src={Logo}
            style={{ height: '48px', width: 'auto' }}
          />
        </Navbar.Brand>
        
        {/* Custom Hamburger Button */}
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <Navbar.Collapse in={isMenuOpen} id="navbar-content">
          {/* Centered navigation options with proper spacing */}
          <Nav className="mx-auto">
            {navigation.map((item) => (
              <Nav.Link 
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`nav-link-custom px-4 py-2 text-white fw-medium ${isActive(item.href) ? 'active' : ''}`}
                style={{ 
                  backgroundColor: isActive(item.href) ? 'rgba(255,255,255,0.1)' : 'transparent', 
                  fontSize: '1.125rem',
                }}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          
          {/* "Get in Touch" button on the right */}
          <div style={{ padding: 0 }}>
            <Button 
              variant="light"
              onClick={() => navigate('/contact')}
              className="btn-custom"
              style={{
                backgroundColor: '#ffffff',
                color: '#4728c7',
                borderRadius: '8px',
                padding: '0.65rem 1.3rem',
                fontWeight: 'bold',
              }}
            >
              Get In Touch
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarSection