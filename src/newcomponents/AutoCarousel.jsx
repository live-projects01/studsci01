// AutoCarousel.jsx
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sfqoiwmaxoxpaibcploq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcW9pd21heG94cGFpYmNwbG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDIyMDksImV4cCI6MjA1MTgxODIwOX0.HGiHK9cDPTv3p8-g3vD0i2dHBSf8gZ0M0iV1FIRTAIg';
const supabase = createClient(supabaseUrl, supabaseKey);


const AutoCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchImages();
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .storage
        .from('imgs2')
        .list();

      if (error) {
        console.error('Error fetching images:', error);
        return;
      }

      const imageUrls = data.map(file => ({
        url: `${supabaseUrl}/storage/v1/object/public/imgs2/${file.name}`,
        name: file.name
      }));

      setImages(imageUrls);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-blue-100 py-8">
      <div className="relative w-full  h-80 overflow-hidden rounded-lg mx-4 ">
        {images.map((image, index) => (
          <div
            key={image.name}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full w-full flex justify-center items-center">
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
        
        {/* Optional: Add navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;