// Navbar.jsx
import React, { useState } from 'react';

const Navbar1 = ({content}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg ml-1">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex justify-center">
          {/* Mobile menu button - positioned absolutely on the left */}
          <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop nav - centered */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <a href="/home" className="py-4 px-2 text-blue-900 hover:text-blue-700">{content.home}</a>
            <a href="/about" className="py-4 px-2 text-gray-700 hover:text-blue-700">{content.about}</a>
            <a href="/team" className="py-4 px-2 text-gray-700 hover:text-blue-700">{content.contact}</a>
            <a href="/login" className="py-4 px-2 text-gray-700 hover:text-blue-700">{content.login}</a>
            <a href="/testget" className="py-4 px-2 text-gray-700 hover:text-blue-700">{content.gallery}</a>
            <a href="/team" className="py-4 px-2 text-gray-700 hover:text-blue-700">{content.team}</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="/home" className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100">{content.home}</a>
        <a href="/about" className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100">{content.about}</a>
        <a href="/team" className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100">{content.contact}</a>
        <a href="/login" className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100">{content.login}</a>
        <a href="/testget" className="py-4 px-2 text-gray-700 hover:text-blue-700">{content.gallery}</a>
        <a href="/team" className="py-4 px-2 text-gray-700 hover:text-blue-700">{content.team}</a>
      </div>
    </nav>
  );
};

export default Navbar1;