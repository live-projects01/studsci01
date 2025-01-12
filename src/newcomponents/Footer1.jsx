// Footer.jsx
import React from 'react';

const Footer1 = ({content}) => {
  return (
    <footer className="bg-blue-800 text-gray-200">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Funding Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Funding</h3>
            <p className="text-gray-300 leading-relaxed">
              {content.heading}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a 
                  href="/about" 
                  className="block text-gray-300 hover:text-blue-300 transition-colors"
                >
                  {content.about}
                </a>
                <a 
                  href="/contact" 
                  className="block text-gray-300 hover:text-blue-300 transition-colors"
                >
                  {content.contact}
                </a>
              </div>
              <div className="space-y-3">
                <a 
                  href="https://www.facebook.com/studentscientistnias/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-blue-300 transition-colors"
                >
                  {content.about}
                </a>
                <a 
                  href="https://www.nias.res.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-blue-300 transition-colors"
                >
                  {content.niaswebsite}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;