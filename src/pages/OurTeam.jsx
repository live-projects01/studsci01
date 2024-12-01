import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Phone, Linkedin } from 'lucide-react'
import dir from '../assets/director profile -People@2x.png'
import sec1 from '../assets/2126760_orig.jpg'
import sec2 from '../assets/sec2.jpg'
import t1 from '../assets/t1.png'
import t2 from '../assets/t2.jpg'
import logo_1 from '../assets/logo_1.png'
import logo_2 from '../assets/Screenshot 2024-12-01 104358.png'
import { useState, useRef } from 'react'

function OurTeam() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const homeRef = useRef(null);
    const testimonialRef = useRef(null);
    const contactRef = useRef(null);
    const latestRef = useRef(null);
  
    // Scroll handler
    const handleSearch = (event) => {
      if (event.key === "Enter") {
        const query = event.target.value.trim().toLowerCase();
        let sectionRef = null;
  
        // Map search query to corresponding ref
        switch (query) {
          case "home":
            sectionRef = homeRef;
            break;
          case "testimonial":
            sectionRef = testimonialRef;
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
                  className="hover:text-blue-700 dark:hover:text-blue-500"
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
                  className="text-blue-700 dark:hover:text-blue-500"
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
      <div className='mt-2 min-h-screen w-full bg-gradient-to-r to-sky-600 from-sky-600 via-teal-100 font-inter rounded-xl p-10'>
        <div className='h-10 bg-transparent'></div>
        <h1 className='text-center text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500 mb-10'>Our Team</h1>
        <div className='bg-white rounded-full h-1 md:mx-64 mx-5 mt-2 mb-10'></div>

        {/* Director Card - Full Width */}
        <div className='max-w-5xl mx-auto mb-10'>
          <div className='bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row'>
            <div className='w-full md:w-1/3 bg-amber-500 flex items-center justify-center'>
              <div className='w-64 h-64 bg-blue-300 flex items-center justify-center text-gray-500'>
                <img className='w-full h-full' src={dir} alt='Director'/>
              </div>
            </div>
            <div className='w-full md:w-2/3 p-8'>
              <h2 className='text-4xl font-semibold text-blue-700 mb-2'>Dr. Shailesh Nayak</h2>
              <h3 className='text-xl text-gray-600 mb-4'>Director, National Institue of Advanced Studies (NIAS)</h3>
              
              <div className='flex space-x-4'>
                <a href="mailto:" className='flex items-center text-blue-600 hover:text-blue-800'>
                  <Mail className='mr-2' /> director@nias.res.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Consultant Card - Full Width */}
        {/* <div className='max-w-5xl mx-auto mb-10'>
          <div className='bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row'>
            <div className='w-full md:w-1/3 bg-gray-200 flex items-center justify-center'>
              <div className='w-64 h-64 bg-gray-300 flex items-center justify-center text-gray-500'>
                Consultant's Photo
              </div>
            </div>
            <div className='w-full md:w-2/3 p-8'>
              <h2 className='text-4xl font-semibold text-blue-700 mb-2'>Dr. NAME HERE</h2>
              <h3 className='text-xl text-gray-600 mb-4'>Main Consultant</h3>
              <p className='text-gray-700 mb-6'>
                Brief introduction about the main consultant and their contributions to the project.
              </p>
              <div className='flex space-x-4'>
                <a href="mailto:" className='flex items-center text-blue-600 hover:text-blue-800'>
                  <Mail className='mr-2' /> Email
                </a>
                <a href="tel:" className='flex items-center text-blue-600 hover:text-blue-800'>
                  <Phone className='mr-2' /> Phone
                </a>
                <a href="#" className='flex items-center text-blue-600 hover:text-blue-800'>
                  <Linkedin className='mr-2' /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div> */}

        {/* Team Leads - Side by Side */}
        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-10'>
          {/* Team Lead 1 */}
          <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
            <div className='h-64 bg-teal-300 flex items-center justify-center text-gray-500'>
            <img className='w-2/3 h-full' src={sec2} alt='Director'/>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold text-blue-700 mb-2'>Dr. P. G. Diwakar</h2>
              <h3 className='text-lg text-gray-600 mb-4'>Mentor</h3>
              <h3 className='text-xl text-gray-600 mb-4'>Science Communication Programme at NIAS</h3>
              <div className='flex space-x-4'>
                <a href="mailto:" className='text-blue-600 hover:text-blue-800'>
                  <Mail className='inline mr-2' />diwakar@nias.res.in
                </a>
                
              </div>
            </div>
          </div>

          {/* Team Lead 2 */}
          <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
            <div className='h-64 bg-teal-300 flex items-center justify-center text-gray-500'>
            <img className='w-2/3 h-full' src={sec1} alt='Director'/>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold text-blue-700 mb-2'>Dr. V. V. Binoy</h2>
              <h3 className='text-lg text-gray-600 mb-4'>Coordinator/Principal Investigator</h3>
              <h3 className='text-lg text-gray-600 mb-4'>Science Communication Programme at NIAS</h3>
              <div className='flex space-x-4'>
                <a href="mailto:" className='text-blue-600 hover:text-blue-800'>
                  <Mail className='inline mr-2' />vvbinoy@nias.res.in
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-10'>
          {/* Team Lead 1 */}
          <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
            <div className='h-64 bg-lime-200 flex items-center justify-center text-gray-500'>
            <img className='w-2/3 h-full' src={t1} alt='Director'/>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold text-blue-700 mb-2'>Priyanka S</h2>
              <h3 className='text-lg text-gray-600 mb-4'>Research Fellow</h3>
              <h3 className='text-lg text-gray-600 mb-4'>Science Communication Programme at NIAS</h3>

              <div className='flex space-x-4'>
                <a href="mailto:" className='text-blue-600 hover:text-blue-800'>
                  <Mail className='inline mr-2' />priyankasrinivas@nias.res.in
                </a>
                
              </div>
            </div>
          </div>

          {/* Team Lead 2 */}
          <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
            <div className='h-64 bg-lime-200 flex items-center justify-center text-gray-500'>
            <img className=' h-full w-2/3' src={t2} alt='Director'/>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold text-blue-700 mb-2'>Paul Joshi</h2>
              <h3 className='text-lg text-gray-600 mb-4'>Research Fellow</h3>
              <h3 className='text-lg text-gray-600 mb-4'>Science Communication Programme at NIAS</h3>
              <div className='flex space-x-4'>
                <a href="mailto:" className='text-blue-600 hover:text-blue-800'>
                  <Mail className='inline mr-2' />pauljoshi@nias.res.in
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Developer Consultant - Full Width */}
        
      </div>
      
      <Footer />
    </>
  )
}

export default OurTeam