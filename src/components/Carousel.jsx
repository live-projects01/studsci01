import React, { useState } from 'react';
import ss_hp_topslider_1 from '../assets/ss_hp_topslider_1.jpg'
import hp_dp_2 from '../assets/hp_dp_2.jpg'
import hp_dp_3 from '../assets/hp_dp_3.jpg'
import hp_dp_4 from '../assets/hp_dp_4.png'
import hp_dp_5 from '../assets/hp_dp_5.jpg'
import hp_dp_6 from '../assets/GHSS Irimbiliyam, 16 July 2015.jpg'
import hp_dp_7 from '../assets/Anekal Public school, Anekal.jpg'
import hp_dp_8 from '../assets/hp_dp_8.jpg'
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, content: ss_hp_topslider_1, bgColor: 'bg-transparent' },
    { id: 2, content: hp_dp_2, bgColor: 'bg-transparent' },
    { id: 3, content: hp_dp_3, bgColor: 'bg-transparent' },
    { id: 4, content: hp_dp_4, bgColor: 'bg-transparent' },
    { id: 5, content: hp_dp_5, bgColor: 'bg-transparent' },
    { id: 6, content: hp_dp_6, bgColor: 'bg-transparent' },
    { id: 7, content: hp_dp_7, bgColor: 'bg-transparent' },
    { id: 8, content: hp_dp_8, bgColor: 'bg-transparent' }
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










        // IF U REMOVE THAT TEXT DIV OF HEIGHT 80, AND IF U MAKE THE OUTER BOX JUSTIFY-CENTER ,CHANGE BG-COLOR, ITLL BE JUST PICS IN THE MIDDLE
  return (
    <div className="relative w-full mt-6 h-96">
      {/* Carousel Wrapper */}
      <div className="relative min-h-56 overflow-hidden rounded-lg md:h-96 w-full">
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-cyan-300 to-teal-200 via-white pb-5 shadow-lg transition-transform duration-700 ease-in-out ${
        index === currentIndex ? 'translate-x-0' : 'translate-x-full'
      } ${
        index < currentIndex ? '-translate-x-full' : ''
      }`}
    >
      <div className="md:w-full  max-w-md md:max-w-5xl md:max-h-5xl h-full flex items-center justify-center p-4">
        <img 
          className='max-h-full max-w-full object-contain md:object-fit md:h-full md:w-full' 
          src={slide.content} 
          alt='Image1'
        />
      </div>
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
  );
}
