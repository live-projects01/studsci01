import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ChevronLeft, ChevronRight, Folder } from 'lucide-react';

// Initialize Supabase client
const supabase = createClient(
  'https://sfqoiwmaxoxpaibcploq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcW9pd21heG94cGFpYmNwbG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDIyMDksImV4cCI6MjA1MTgxODIwOX0.HGiHK9cDPTv3p8-g3vD0i2dHBSf8gZ0M0iV1FIRTAIg'
);

const TestGet = () => {
  const [folders, setFolders] = useState([]);
  const [folderContents, setFolderContents] = useState({});
  const [currentSlides, setCurrentSlides] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch folders from Supabase storage
  const fetchFolders = async () => {
    try {
      const { data: list, error } = await supabase
        .storage
        .from('images')
        .list('', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' }
        });
        console.log()

      if (error) throw error;

      // Filter for folders (items without file extensions)
      const folders = list.filter(item => !item.name.includes('.'));
      setFolders(folders);
      console.log(folders)

      // Fetch contents for each folder
      folders.forEach(folder => fetchFolderContents(folder.name));
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch contents of a specific folder
  const fetchFolderContents = async (folderName) => {
    try {
      const { data: files, error } = await supabase
        .storage
        .from('images')
        .list(folderName, {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' }
        });

      if (error) throw error;

      // Filter for image files
      const images = files.filter(file => 
        file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i));

      // Get public URLs for each image
      const urls = await Promise.all(
        images.map(async (image) => {
          const { data: { publicUrl } } = supabase
            .storage
            .from('images')
            .getPublicUrl(`${folderName}/${image.name}`);
          return publicUrl;
        })
      );

      setFolderContents(prev => ({
        ...prev,
        [folderName]: urls
      }));
      setCurrentSlides(prev => ({
        ...prev,
        [folderName]: 0
      }));
    } catch (err) {
      console.error(`Error fetching contents for folder ${folderName}:`, err);
      setFolderContents(prev => ({
        ...prev,
        [folderName]: []
      }));
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  const nextSlide = (folderName) => {
    setCurrentSlides(prev => ({
      ...prev,
      [folderName]: (prev[folderName] + 1) % folderContents[folderName].length
    }));
  };

  const prevSlide = (folderName) => {
    setCurrentSlides(prev => ({
      ...prev,
      [folderName]: prev[folderName] === 0
        ? folderContents[folderName].length - 1
        : prev[folderName] - 1
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        Error loading galleries: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:w-3/5">
      <h1 className="text-5xl font-bold mb-8 text-center ">Gallery</h1>
      
      {folders.length === 0 ? (
        <p className="text-gray-500 text-center">No galleries found</p>
      ) : (
        <div className="space-y-12">
          {folders.map((folder) => (
            <div key={folder.name} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Folder className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-semibold text-center">{folder.name}</h2>
              </div>

              {folderContents[folder.name]?.length > 0 ? (
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                    <img
                      src={folderContents[folder.name][currentSlides[folder.name]]}
                      alt={`Slide ${currentSlides[folder.name] + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {folderContents[folder.name].length > 1 && (
                    <>
                      <button
                        onClick={() => prevSlide(folder.name)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => nextSlide(folder.name)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {folderContents[folder.name].map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              currentSlides[folder.name] === index
                                ? 'bg-white'
                                : 'bg-white/50'
                            }`}
                            onClick={() => setCurrentSlides(prev => ({
                              ...prev,
                              [folder.name]: index
                            }))}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <p className="text-gray-500">No images found in this folder</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestGet;