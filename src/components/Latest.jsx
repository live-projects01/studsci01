import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Latest = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="h-auto md:h-[32rem] w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row relative">
      {/* Previous Slide Button */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full hover:bg-white/75 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
        <p className="text-gray-600 mb-6 overflow-y-auto max-h-[calc(100%-100px)] pr-2">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Next Slide Button */}
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full hover:bg-white/75 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Latest;