import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useRef } from 'react';
import logo_1 from '../assets/logo_1.png'
import logo_2 from '../assets/Screenshot 2024-12-01 104358.png'

function About() {



    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const benefitRef = useRef(null);
    const climateRef = useRef(null);
    const contactRef = useRef(null);
    const latestRef = useRef(null);
  
    // Scroll handler
    const handleSearch = (event) => {
      if (event.key === "Enter") {
        const query = event.target.value.trim().toLowerCase();
        let sectionRef = null;
  
        // Map search query to corresponding ref
        switch (query) {
          case "climate" || "Climate":
            sectionRef = climateRef;
            break;
          case "benefit" || "Benefit" || "benefits" || "Benefits" || "Advantages":
            sectionRef = benefitRef;
            break;
          case "contact":
            sectionRef = contactRef;
            break;
          case "latest":
            sectionRef = latestRef;
            break;
          default:
            alert("Section not found");
            return;
        }
  
        // Scroll to the section if ref is found
        if (sectionRef && sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    };




  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 p-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
            <div>
            <img
              src={logo_1}
              className="h-14"
              alt="Flowbite Logo"
            />
            </div>
            <div>
            <img
              src={logo_2}
              className="h-14"
              alt="Flowbite Logo"
            />
            </div>
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white p-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-blue-500 via-slate-300">
              Student-Scientist
            </span>
          </a>

          {/* Navbar Menu */}
          <div className="hidden md:flex items-center gap-64  space-x-6">
            <ul className="flex gap-4  space-x-6 font-medium text-gray-900 dark:text-white">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-blue-700 dark:hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/egallery"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Our Team
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
                  href="/"
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/egallery"
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Our Team
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

      
      {/* Main Content Area */}
      <div className='mt-2 min-h-screen w-full bg-gradient-to-r to-sky-500 from-sky-500 via-cyan-100 font-inter rounded-xl mb-10'>
        <div className='pt-20 mb-10'>
          <h1 className='text-center text-6xl font-bold text-blue-700'>About Us</h1>
          <div className='bg-white rounded-full h-1 md:mx-64 mx-5 mt-2'></div>
          
          {/* Content Sections */}
          <div className='mt-10 px-10 md:px-20 mb-10'>
            {/* Student-Scientist Card */}
            <div className='bg-white rounded-lg shadow-lg p-10 mb-10'>
              <h2 className='text-4xl font-semibold text-blue-700 mb-6'>What is Student-Scientist?</h2>
              <p className='text-lg text-gray-800 leading-relaxed'>
                Student-Scientist is a unique initiative by the National Institute of Advanced Studies (NIAS), Bengaluru. It aims to empower students to monitor environmental and societal changes caused by climate change, contributing to coastal communities' resilience in Karnataka and Kerala.
              </p>
              <p className='text-lg text-gray-800 leading-relaxed mt-4'>
                This initiative connects students with professional researchers, enabling them to study their environment scientifically, address societal problems, and communicate vital information to their communities, fostering socially committed citizens with scientific temper.
              </p>
            </div>

            {/* Climate Challenge Card */}
            <div className='bg-white rounded-lg shadow-lg p-10 mb-10'>
              <h2 ref={climateRef} className='text-4xl font-semibold text-blue-700 mb-6'>The Climate Challenge</h2>
              <p className='text-lg text-gray-800 leading-relaxed'>
                Coastal ecosystems in India face the twin threats of climate change-induced environmental shifts and the increasing frequency of natural calamities. To combat these challenges, it is essential to integrate data-driven environmental monitoring, public awareness, and stakeholder collaboration.
              </p>
              <p className='text-lg text-gray-800 leading-relaxed mt-4'>
                The project emphasizes grassroots-level data collection, accessible science communication, and disaster risk mitigation strategies to empower vulnerable coastal communities.
              </p>
            </div>

            {/* Project Support Card */}
            <div className='bg-white rounded-lg shadow-lg p-10 mb-10'>
              <h2 className='text-4xl font-semibold text-blue-700 mb-6'>Project Support</h2>
              <p className='text-lg text-gray-800 leading-relaxed'>
                Financially supported by the National Council for Science and Technology Communication (NCSTC), Department of Science and Technology, Government of India, the Student-Scientist initiative is a robust platform for collaborative knowledge-sharing and action.
              </p>
              <p className='text-lg text-gray-800 leading-relaxed mt-4'>
                This initiative ensures continuous guidance and training for students to explore scientific methodologies and contribute effectively to climate change mitigation and adaptation strategies.
              </p>
            </div>

            {/* Benefits Card */}
            <div className='bg-white rounded-lg shadow-lg p-10 mb-20'>
              <h2 ref={benefitRef} className='text-4xl font-semibold text-blue-700 mb-6'>Benefits of Joining</h2>
              <ul className='list-disc list-inside text-lg text-gray-800 leading-relaxed'>
                <li>Free training on monitoring environmental and societal changes.</li>
                <li>Introduction to climate change impact and mitigation strategies.</li>
                <li>Developing ICT materials for science communication.</li>
                <li>Collaborating with researchers and NGOs for grassroots-level impact.</li>
                <li>Contributing to a public platform with actionable insights.</li>
                <li>Building leadership skills by guiding junior student-scientists.</li>
              </ul>
            </div>

            <div className='h-8 bg-transparent'></div>
          </div>
        </div>
      </div>

      
      
      {/* Footer */}
      <Footer />
    </>
  )
}

export default About
