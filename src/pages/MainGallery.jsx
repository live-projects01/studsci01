import React from 'react'
import { useState } from 'react';
import ss_hp_topslider_1 from '../assets/ss_hp_topslider_1.jpg'
function MainGallery() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, content: ss_hp_topslider_1, bgColor: 'bg-amber-200' },
    { id: 2, content: 'Slide 2 Content', bgColor: 'bg-blue-500' },
    { id: 3, content: 'Slide 3 Content', bgColor: 'bg-green-500' },
    { id: 4, content: 'Slide 4 Content', bgColor: 'bg-yellow-500' },
    { id: 5, content: 'Slide 5 Content', bgColor: 'bg-purple-500' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
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
                  className="text-blue-700 dark:hover:text-blue-500"
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
      <div className='mt-6 min-h-screen w-full bg-gradient-to-r  to-teal-200 from-orange-200 via-white font-inter rounded-xl'>
            <div className=''>
            <div className='h-32 bg-transparent'></div> {/* this is just for top margin */}
            <h1 className='text-center text-8xl  text-blue-700'>Gallery</h1>
            </div>



            <div className='h-20 bg-transparent'></div>
            <div className='min-h-96 bg-white mx-40'>
                <div className='h-10 bg-transparent'></div>
                <h1 className='text-center text-5xl'>Karnataka School program</h1>
                


                <div className="relative w-full mt-6 h-96">
      {/* Carousel Wrapper */}
      <div className="relative min-h-56 overflow-hidden rounded-lg md:h-96 ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full flex items-center md:grid md:grid-cols-2 text-white text-lg font-bold transition-transform duration-700 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            } ${
              index < currentIndex ? '-translate-x-full' : ''
            } ${slide.bgColor}`}
          >
            <img className='h-96 md:col-span-1' src={slide.content} alt='Image1'/>
            
            <div className='md:h-80 w-3/4 ml-20 bg-white rounded-lg text-center md:col-span-1'>Hellow there</div>
            
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
                
            </div>


      </div>
    </>
  )
}

export default MainGallery