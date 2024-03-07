'use client'
import { useState, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo HACIENDA TRINIDAD.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";



const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Nosotros', href: '#' },
  { name: 'Habitaciones', href: '/rooms' },
  { name: 'Galeria', href: '/gallery' },
  { name: 'Contacto', href: '#' },
]


const Nav = () =>{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="fixed bg-white inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Hotel Haciendam Trinidad</span>
          <Image
            className="h-16 w-auto"
            src={logo.src} width={'400'} height={'400'}
            alt="Hotel Hacienda Trinidad"
          />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="h-6 w-6" aria-hidden="true"><RxHamburgerMenu /></div>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
          Iniciar sesion <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Hotel Hacienda Trinidad</span>
            <Image
              className="h-8 w-auto"
              width={100}
              height={100}
              about='Hotel Hacienda Trinidad Logo'
              src={logo.src}
              alt="Hotel hacienda trinidad"
            />
          </Link>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Close menu</span>
            <FaTimes />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                href="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Iniciar sesion
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  )
}

export default Nav;