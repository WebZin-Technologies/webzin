import React, { useState } from 'react'
import './NavbarSection.css'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../Assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'



const navigation = [
  { name: 'Home', location: '/' },
  { name: 'Services', location: '/services' },
  { name: 'About', location: '/about' },
  { name: 'Contact', location: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavbarSection() {
  const [activeItem, setActiveItem] = useState('/');
  return (
    <Disclosure as="nav" className="bg-webzin">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              alt="WebZin"
              src={Logo}
              className="h-13 w-auto"
            />
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden sm:flex sm:items-center">
            <div className="flex space-x-8 nav-link">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.location}
                  onClick={() =>{ setActiveItem(item.location)}}
                  className={classNames(
                    activeItem === item.location ? 'bg-white/10 text-white' : 'text-white hover:bg-white/10',
                    'px-4 py-2 text-xl font-bold relative group'
                  )}
                >
                   {item.name}
                
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Moved to right side */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-white  focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {open ? (
         
          <Bars3Icon className="block h-8 w-8 block" aria-hidden="true" />
        ) : (
          <XMarkIcon className="block h-8 w-8 hidden" aria-hidden="true" />
        )}
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="px-4 pt-2 pb-3  space-y-1 nav-link">
          {navigation.map((item) => (
            <Link
              key={item.name}
              as="a"
              to={item.location}
              onClick={() => { setActiveItem(item.location)}}
              className={classNames(
                activeItem === item.location
                  ? 'bg-white/10 text-white'  // Transparent light white background
                  : 'text-white hover:bg-white/10',
                'block px-3 py-2 rounded-md text-lg font-bold relative'
              )}
            >
             {item.name}
              
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default NavbarSection