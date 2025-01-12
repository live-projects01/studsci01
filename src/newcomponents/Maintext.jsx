import React from 'react';

const Maintext = ({ content }) => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Mission & Vision
        </h2>

        

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-24 bg-blue-200" />
          <div className="w-3 h-3 rounded-full bg-blue-400 mx-4" />
          <div className="h-px w-24 bg-blue-200" />
        </div>

        {/* Vision Section */}
        
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            {content.mission}
          </p>
        
      </div>
    </div>
  );
};

export default Maintext;