import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo_1 from '../assets/logo_1.png'
import logo_2 from '../assets/Screenshot 2024-12-01 104358.png'


// Import your image
import eg_1_1 from '../assets/eg_1_1.jpg'
import eg_2_1 from '../assets/eg_2_1.jpg'
import eg_3_1 from '../assets/eg_3_1.jpg'
import eg_4_1 from '../assets/eg_4_1.jpg'
import eg_1_2 from '../assets/eg_1_2.jpg'
import eg_2_2 from '../assets/eg_2_2.jpg'
import eg_3_2 from '../assets/eg_3_2.jpg'
import eg_4_2 from '../assets/eg_4_2.jpg'
import eg_4_3 from '../assets/eg_4_3.jpg'
import eg_3_4 from '../assets/eg_3_4.jpg'
import eg_3_3 from '../assets/eg_3_3.jpg'
import eg_1_3 from '../assets/eg_1_3.png'
import eg_1_4 from '../assets/eg_1_4.jpg'
import eg_1_5 from '../assets/eg_1_5.png'
import eg_5_1 from '../assets/eg_5_1.jpg'
import eg_5_2 from '../assets/eg_5_2.jpg'
import eg_5_3 from '../assets/eg_5_3.jpg'
import eg_5_4 from '../assets/eg_5_4.jpg'
import eg_5_5 from '../assets/eg_5_5.jpg'
import eg_5_6 from '../assets/eg_5_6.jpg'
import eg_6_1 from '../assets/eg_6_1.jpg'
import eg_6_2 from '../assets/eg_6_2.jpg'
import Footer from '../components/Footer';
const EventCard = ({ title, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 my-8 w-full max-w-4xl mx-auto hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-4">
      <h2 className="text-4xl font-semibold text-slate-700 mb-8 text-center text-gray-900 tracking-wider">
        {title}
      </h2>
      
      <div className="relative w-full md:h-[70vh] min-h-[300px] h-auto overflow-hidden rounded-2xl group">
        {/* Current Image */}
        {
          <img 
            src={images[currentImageIndex]} 
            alt={`${title} - Image ${currentImageIndex + 1}`}
            className="absolute inset-0 md:w-full md:h-full h-auto "
          />
        }
        
        {/* Navigation Buttons - Only show on hover */}
        <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button 
            onClick={prevImage} 
            className="bg-white/60 hover:bg-white/80 rounded-full p-4 ml-4 shadow-xl"
          >
            <ChevronLeft className="w-12 h-12 text-gray-800" />
          </button>
          <button 
            onClick={nextImage} 
            className="bg-white/60 hover:bg-white/80 rounded-full p-4 mr-4 shadow-xl"
          >
            <ChevronRight className="w-12 h-12 text-gray-800" />
          </button>
        </div>
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-blue-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EventGallery = () => {

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



  const eventsData = [
    {
      title: "Connecting cognition with science communication",
      // Mix of text placeholders and actual image imports
      images: [
        eg_1_1,  // Imported image
        eg_1_2, 
        eg_1_3, 
        eg_1_4, 
        eg_1_5
        
      ]
    },
    {
      title: "Events",
      images: [eg_2_1, eg_2_2]
    },
    {
      title: "Student-Scientist and Climate Change Workshops",
      images: [eg_4_1, eg_4_2,eg_4_3,eg_5_6]
    },
    {
      title: "Poster Presentation",
      images: [eg_6_1, eg_6_2]
    },
    {
      title: "FreshWater conservation & Student Network- Karnataka",
      images: [eg_3_1, eg_3_2, eg_3_3, eg_3_4]
    },
    {
      title: "Other workshops across Kerala and Karnataka",
      images: [eg_5_1,eg_5_2,eg_5_3, eg_5_4,eg_5_5]
    }
    // ... rest of the events remain the same
  ];

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
                  className="text-blue-700 dark:hover:text-blue-500"
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
    <div className="container mx-auto px-4 py-8 mt-2 bg-gradient-to-r from-blue-800 to-blue-800 via-cyan-100">
      <h1 className="text-8xl font-bold text-center mb-16  tracking-tight text-blue-900">
        Our Events Gallery
      </h1>
      <div className='h-1 bg-white mx-44'></div>
      <div className='h-10 bg-transparent'></div>
      <div className="space-y-16">
        {eventsData.map((event, index) => (
          <EventCard 
            key={index}
            title={event.title}
            images={event.images}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventGallery;