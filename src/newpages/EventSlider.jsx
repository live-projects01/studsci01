
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { Content } from '@radix-ui/react-dropdown-menu';

const supabaseUrl = 'https://sfqoiwmaxoxpaibcploq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcW9pd21heG94cGFpYmNwbG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDIyMDksImV4cCI6MjA1MTgxODIwOX0.HGiHK9cDPTv3p8-g3vD0i2dHBSf8gZ0M0iV1FIRTAIg';
const supabase = createClient(supabaseUrl, supabaseKey);

const EventSlider = ({ content }) => {

  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to determine the correct file name based on language
  const getFileName = (baseName) => {
    switch (content.language) {
      case 'Kannada':
        console.log('language changed')
        return `kannada_${baseName}`;
      case 'Malayalam':
        console.log('language changed')
        return `malayalam_${baseName}`;
      default:
        console.log('language changed')
        return `english_${baseName}`;
    }
  };

  // Fetch the latest 5 event folders
  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('new_events')
        .list('', { sortBy: { column: 'name', order: 'desc' }, limit: 5 });

      if (error) throw error;

      // Fetch the content of each event folder
      const eventPromises = data.map(async (folder) => {
        const folderName = folder.name;

        // List files inside the folder to find the image file
        const { data: files, error: filesError } = await supabase.storage
          .from('new_events')
          .list(folderName);

        if (filesError) throw filesError;

        // Find the image file (assuming it's a .jpg or .png file)
        const imageFile = files.find(
          (file) =>
            file?.name?.toLowerCase().endsWith('.jpg') ||
            file?.name?.toLowerCase().endsWith('.png')
        );

        // Construct the image URL
        const imageUrl = imageFile
          ? `https://sfqoiwmaxoxpaibcploq.supabase.co/storage/v1/object/public/new_events/${folderName}/${imageFile.name}`
          : '';

        // Fetch the heading file based on language
        const { data: headingFile } = await supabase.storage
          .from('new_events')
          .download(`${folderName}/${getFileName('heading.txt')}`);
        const heading = await headingFile.text();

        // Fetch the description file based on language
        const { data: descriptionFile } = await supabase.storage
          .from('new_events')
          .download(`${folderName}/${getFileName('description.txt')}`);
        const description = await descriptionFile.text();

        return {
          folderName,
          imageUrl,
          heading,
          description,
        };
      });

      const resolvedEvents = await Promise.all(eventPromises);
      setEvents(resolvedEvents);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  };

  // Initialize the events on component mount
  useEffect(() => {
    fetchEvents();
  }, [content.language]);

  // Handle slider navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
        {content.heading}
      </h2>
      <div className="flex items-center justify-center mb-12">
        <div className="h-px w-24 bg-blue-200" />
        <div className="w-3 h-3 rounded-full bg-blue-400 mx-4" />
        <div className="h-px w-24 bg-blue-200" />
      </div>
      {events.length > 0 && (
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Event Grid Layout */}
          <div className="flex items-start">
            {/* Left side: Image */}
            <div className="flex-shrink-0 w-3/5 h-80">
              <img
                src={events[currentIndex].imageUrl}
                alt="Event"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right side: Heading and Description */}
            <div className="w-2/5 p-8">
              <h2 className="text-2xl font-bold mb-4">
                {events[currentIndex].heading}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {events[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
      {events.length === 0 && <p>Loading events...</p>}
    </div>
  );
};

export default EventSlider;
