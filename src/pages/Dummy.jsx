import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import 'flowbite/dist/flowbite.min.js';
import Gallery from './Gallery';
import { useRef } from 'react';
import { useState } from 'react';
import logo_1 from '../assets/logo_1.png'
import logo_2 from '../assets/Screenshot 2024-12-01 104358.png'




import ss_hp_latest_1 from '../assets/ss_hp_latest_1.jpg'

function Dummy() {

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
            case "mission":
            sectionRef = homeRef;
            break;
            case "vision":
            sectionRef = homeRef;
            break;
          case "upcoming":
            sectionRef = testimonialRef;
            break;
            case "Upcoming":
            sectionRef = testimonialRef;
            break;
            case "Upcoming Events":
            sectionRef = testimonialRef;
            break;
            case "Future Events":
            sectionRef = testimonialRef;
            break;
            case "future":
            sectionRef = testimonialRef;
            break;
          case "contact":
            sectionRef = contactRef;
            break;
          case "latest":
            sectionRef = latestRef;
            break;
            case "latest events":
            sectionRef = latestRef;
            break;
            case "Latest Events":
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
            <span className="text-2xl font-bold whitespace-nowrap dark:text-white p-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-blue-500 via-slate-300">
              Student-Scientist
            </span>
          </a>

          {/* Navbar Menu */}
          <div className="hidden md:flex items-center gap-64  space-x-6">
            <ul className="flex gap-4  space-x-6 font-medium text-gray-900 dark:text-white">
              <li>
                <a
                  href="#"
                  className="text-blue-700 dark:hover:text-blue-500"
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

        
        {/* THIS IS WHERE THE MAIN FULL SCREEN DIV STARTS */}
        <div className='mt-3 min-h-screen w-full bg-gradient-to-r to-sky-400 from-sky-400 via-yellow-100 font-inter rounded-xl'>
            <Carousel/>


        <div ref={homeRef} className='mt-20 min-h-80 items-center'>
            <h1 className='text-center text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-blue-900 via-cyan-500'>Our Mission</h1>
            <div className='bg-white rounded-full h-1 md:mx-64 mx-5 mt-2'></div>
            <p className='text-slate-700 text-center text-lg mt-4 mx-10 p-10'>
            To build a network of students from schools and colleges in coastal Karnataka and Kerala who are trained and equipped to monitor, study, and document environmental and societal changes caused by climate change. By fostering collaboration between students, teachers, researchers, and NGOs, we aim to generate grassroots-level data, communicate scientific information effectively, and support coastal communities in adapting to climate challenges and mitigating disaster risks.
            </p>
        </div>

        <div className='mt-5 min-h-80 items-center'>
            <h1 className='text-center text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-blue-900 via-cyan-500'>Our Vision</h1>
            <div className='bg-white rounded-full h-1 md:mx-64 mx-5 mt-2'></div>
            <p className='text-slate-700 text-center text-lg mt-4 mx-10 p-10'>
            To establish a sustainable and effective system for monitoring the impact of climate change on India’s coastal regions. By integrating educational institutions, students, researchers, and local stakeholders, we envision a future where communities are informed, resilient, and empowered to make evidence-based decisions for environmental conservation and disaster preparedness.
            </p>
        </div>

        <h1 ref={latestRef} className='text-center text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-blue-900 via-cyan-500 '>Latest</h1>
        <div className='bg-white rounded-full h-1 md:mx-64 mx-5 mt-2'></div>
        <div className='h-8 bg-transparent'></div>
            <Gallery/>



    

            
            




            <div className='bg-white rounded-full h-1 md:mx-64 mx-5 mt-5'></div>
<h1 ref={testimonialRef} className='text-center text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-sky-700 via-cyan-300 p-10'>Upcoming Events</h1>
<div className='bg-white rounded-full h-1 md:mx-64 mx-5 mt-2'></div>

            
            <div class="overflow-x-hidden ">
  <div class="py-12 animate-marquee whitespace-nowrap">
     
  

  <div class="inline-block mx-4 md:w-2/5 w-full min-h-64 bg-white rounded-lg shadow-lg p-6 ">
      <div className='flex flex-col justify-center items-center'>
      <h3 class="md:text-xl font-bold md:mb-2  text-wrap">Website Launch for Student-Scientist</h3>
      <p class="text-gray-700 text-center text-wrap  h-44">
        The launch of our Student-Scientist website scheduled for 4th December , enabling our community to access all info related to our initiative, and soon be able to post and upload climate activites as well!
      </p>
      </div>
    </div>
     
    <div class="inline-block mx-4 md:w-2/5 w-full min-h-64 bg-white rounded-lg shadow-lg p-6 ">
      <div className='flex flex-col justify-center items-center'>
      <h3 class="text-xl font-bold mb-2 text-wrap">Student Scientist Workshops</h3>
      <p class="text-gray-700 text-center text-wrap h-44">
      Upcoming workshops in Calicut, Kerala  in collaboration with ULCCS and Mangalore, Karnataka in association with Alva's Education Foundation.
        Stay tuned, and keep visiting this page for more details on our exciting workshops!
      </p>
      </div>
    </div>

     
    
  </div>
</div>



            
            


            {/* grid with 2 columns */}
            
            {/* <div className='flex flex-col justify-center  min-h-80'>
            <div className='grid grid-cols-2 md:gap-2 gap-1'>

                <div className='bg-white rounded-lg shadow-md min-h-64 md:mx-5 ml-2'></div>
                <div className='bg-white rounded-lg shadow-md min-h-64  md:mx-5 mr-2'></div>

            </div>
            </div> */}


                    {/*  grid with 3 columns */}
            {/* <div className='flex flex-col justify-center  min-h-80'>
            <div className='grid grid-cols-3 gap-3'>

                <div className='bg-white rounded-lg shadow-md min-h-64 mx-5'></div>
                <div className='bg-white rounded-lg shadow-md min-h-64 mx-5'></div>
                <div className='bg-white rounded-lg shadow-md min-h-64 mx-5'></div>

            </div>
            </div> */}

                {/* grid with uneven compartments */}

            {/* <div className='flex flex-col justify-center  min-h-80'>
            <div className='grid grid-cols-6 gap-3'>

                <div className='bg-white rounded-lg shadow-md min-h-64 mx-5 col-span-2'></div>
                <div className='bg-white rounded-lg shadow-md min-h-64 mx-5 col-span-4'></div>
                

            </div>
            </div> */}


        </div>
        <Footer/>
        
    </>
  )
}

export default Dummy