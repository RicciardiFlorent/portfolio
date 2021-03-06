import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../logo.png';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav bg-gray-900 shadow-md ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-16 w-16"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#aboutme"
                className=" hover:bg-red-500 hover:bg-opacity-20  text-yellow-200 px-3 py-2  text-base font-medium"
              >
                About
              </a>

              <a
                href="#education"
                className="text-yellow-200 hover:bg-red-500 hover:bg-opacity-20 px-3 py-2  text-base font-medium"
              >
                Education
              </a>

              <a
                href="#works"
                className="text-yellow-200 hover:bg-red-500 hover:bg-opacity-20 px-3 py-2 text-base font-medium"
              >
                Works
              </a>

              <a
                href="#projects"
                className="text-yellow-200 hover:bg-red-500 hover:bg-opacity-20 px-3 py-2  text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-yellow-200 hover:bg-red-500 hover:bg-opacity-20 px-3 py-2 text-base font-medium"
              >
                Contact
              </a>
              <a href="https://drive.google.com/file/d/18tZfN038dEI3OHlhkuu3i5b08Oo7QAR7/view?usp=sharing"
                 target="_blank" rel="noreferrer"
                className="text-yellow-200 border-2 border-yellow-200 hover:bg-red-500 hover:bg-opacity-20 px-3 py-2 text-base font-medium"
              >
                Resume
              </a> 
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div className="md:hidden" id="mobile-menu">
          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
                href="#aboutme"
                className=" hover:bg-red-500 hover:bg-opacity-20  text-yellow-200 px-3 py-2  block text-base font-medium"
              >
                About
              </a>


              <a
                href="#education"
                className=" hover:bg-red-500 hover:bg-opacity-20  text-yellow-200 px-3 py-2  block text-base font-medium"
              >
                Education
              </a>

              <a
                href="#works"
                className=" hover:bg-red-500 hover:bg-opacity-20  text-yellow-200 px-3 py-2  block text-base font-medium"
              >
                Works
              </a>

              <a
                href="#projects"
                className=" hover:bg-red-500 hover:bg-opacity-20  text-yellow-200 px-3 py-2  block text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#contacts"
                className=" hover:bg-red-500 hover:bg-opacity-20  text-yellow-200 px-3 py-2  block text-base font-medium"
              >
                Contacts
              </a>

              <a href="https://drive.google.com/file/d/18tZfN038dEI3OHlhkuu3i5b08Oo7QAR7/view?usp=sharing"
                 target="_blank" rel="noreferrer"
                className=" border-2 border-yellow-200 hover:bg-red-500 hover:bg-opacity-20  text-yellow-200 px-3 py-2  block text-base font-medium"
              >
                Resume
              </a>
          </div>
        </div>
      )}
    </Transition>
  </nav>
  );
}

export default Navbar;
