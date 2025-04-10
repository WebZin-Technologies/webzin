import React, { useState } from 'react'
import './NavbarSection.css'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', location: '/' },
  { name: 'About', location: '/about' },
  { name: 'Contact', location: '/contact' },
  { name: 'Blog', location: '/blog' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavbarSection() {
  const [activeItem, setActiveItem] = useState('/');

  return (
    <Disclosure as="nav" className="bg-webzin z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-20">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  alt="WebZin"
                  src={Logo}
                  className="h-13 w-auto"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center">
                <div className="flex space-x-8 nav-link">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.location}
                      onClick={() => setActiveItem(item.location)}
                      className={classNames(
                        activeItem === item.location
                          ? 'bg-white/10 text-white'
                          : 'text-white hover:bg-white/10',
                        'px-4 py-2 text-xl font-bold relative group'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 nav-link">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.location}
                  onClick={() => setActiveItem(item.location)}
                  className={classNames(
                    activeItem === item.location
                      ? 'bg-white/10 text-white'
                      : 'text-white hover:bg-white/10',
                    'block px-3 py-2 rounded-md text-lg font-bold relative'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavbarSection
