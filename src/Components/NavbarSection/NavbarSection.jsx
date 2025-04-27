import React, { useState, useEffect } from 'react'
import './NavbarSection.css'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../Assets/Logo.png'
import { useNavigate, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Home', location: '/' },
  { name: 'Portfolio', location: '/portfolio' },
  { name: 'About', location: '/about' },
  { name: 'Contact', location: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavbarSection() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeItem, setActiveItem] = useState(location.pathname)

  // This will run whenever the URL changes
  useEffect(() => {
    setActiveItem(location.pathname)
  }, [location.pathname])

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <Disclosure as="nav" className="navbar-container">
      {({ open }) => (
        <>
          <div className="navbar-content">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  alt="WebZin"
                  src={Logo}
                  className="h-12 w-auto cursor-pointer"
                  onClick={() => handleNavigation('/')}
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:justify-center flex-1">
                <div className="flex space-x-8">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.location)}
                      className={classNames(
                        activeItem === item.location
                          ? 'bg-white/10 text-white'
                          : 'text-white hover:bg-white/10',
                        'px-4 py-2 text-lg font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-0 border-none'
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Get in Touch Button */}
              <div className="hidden sm:flex sm:items-center">
                <button className="nav__cta focus:outline-none focus:ring-0 border-none" onClick={() => navigate('/contact')}>
                  Get In Touch
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-0 border-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="mobile-nav">
            {({ close }) => (
              <div className="mobile-nav-content">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavigation(item.location)
                      close()
                    }}
                    className={classNames(
                      activeItem === item.location
                        ? 'bg-white/10 text-white'
                        : 'text-white hover:bg-white/10',
                      'block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-0 border-none'
                    )}
                  >
                    {item.name}
                  </button>
                ))}
                <button className="nav__cta focus:outline-none focus:ring-0 border-none" onClick={() => navigate('/contact')}>
                  Get In Touch
                </button>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavbarSection
