import React, { useState } from 'react'
import './NavbarSection.css'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../Assets/Logo.png'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavbarSection() {
  const [activeItem, setActiveItem] = useState('#home');

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
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.href)}
                  className={classNames(
                    activeItem === item.href ? 'bg-white/10 text-white' : 'text-white hover:bg-white/10',
                    'px-4 py-2 text-xl font-bold relative group'
                  )}
                >
                  {item.name}
                  {/* <span className={classNames(
                    activeItem === item.href ? 'w-full' : 'w-0 ',
                    'absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300'
                  )} /> */}
                </a>
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
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => setActiveItem(item.href)}
              className={classNames(
                activeItem === item.href
                  ? 'bg-white/10 text-white'  // Transparent light white background
                  : 'text-white hover:bg-white/10',
                'block px-3 py-2 rounded-md text-lg font-bold relative'
              )}
            >
              {item.name}
              {/* {activeItem === item.href && (
                <span className="absolute left-3 bottom-0 h-0.5 w-2/4 -translate-x-1/2 bg-white" />
              )} */}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default NavbarSection