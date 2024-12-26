import React, { useState } from 'react';
import './style.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-zinc-100 shadow-emerald-600 shadow-sm text-emerald-600">
        <div className="max-w-7xl mx-auto fixed px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold">Brand</a>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-pink-300">Home</a>
              <a href="#" className="hover:text-pink-300">About</a>
              <a href="#" className="hover:text-pink-300">Services</a>
              <a href="#" className="hover:text-pink-300">Contact</a>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
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
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
          </div>
        </div>
      </nav>
    
    );
};

export default Navbar