import React from 'react'

function Navbar2() {
  return (
    <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 p-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              Student-Scientist
            </span>
          </a>

          {/* Navbar Menu */}
          <div className="hidden md:flex items-center gap-64  space-x-6">
            <ul className="flex gap-4  space-x-6 font-medium text-gray-900 dark:text-white">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Search Bar */}
            <input
              type="text"
              className="block w-auto max-w-sm p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onKeyPress={handleSearch}
            />
          </div>

          {/* Hamburger Menu */}
          <button
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu for small screens */}
        {isMenuOpen && (
          <div
            className="flex flex-col mt-4 space-y-4 md:hidden"
            id="navbar-menu"
          >
            <ul className="space-y-2 text-gray-900 dark:text-white">
              <li>
                <a
                  href="#"
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Search Bar for small screens */}
            <input
              type="text"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onKeyPress={handleSearch}
            />
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar2