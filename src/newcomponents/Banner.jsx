// Banner.jsx
import React from 'react';
import nias from '../assets/Screenshot 2024-12-01 104358.png'

const Banner = ({content}) => {
  return (
    <div className="bg-blue-50 h-auto flex flex-col items-center justify-between p-8">
      <div className="flex items-center space-x-4">
        <img
          src={nias}
          alt="NIAS Logo"
          className="h-14 w-14"
        />
        <p className="text-lg md:text-xl text-gray-800 font-light">
          {content.top}
        </p>
      </div>
      
      <div className="text-center">
        <h1 className="text-5xl md:text-8xl font-bold bg-clip-text h-56 p-3 text-transparent bg-gradient-to-r from-blue-800 to-blue-700 via-cyan-200 mb-4">
          {content.heading}
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          {content.description}
        </p>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Empowering climate analysis with our community of curious learners and activists.
        </p>
      </div>
      
      <div className="h-8" />
    </div>
  );
};

export default Banner;