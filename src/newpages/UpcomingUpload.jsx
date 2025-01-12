
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const UpcomingUpload = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Text fields for multiple languages
  const [englishHeading, setEnglishHeading] = useState('');
  const [englishDescription, setEnglishDescription] = useState('');
  const [kannadaHeading, setKannadaHeading] = useState('');
  const [kannadaDescription, setKannadaDescription] = useState('');
  const [malayalamHeading, setMalayalamHeading] = useState('');
  const [malayalamDescription, setMalayalamDescription] = useState('');

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  // Supabase client setup
  const supabaseUrl = 'https://sfqoiwmaxoxpaibcploq.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcW9pd21heG94cGFpYmNwbG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDIyMDksImV4cCI6MjA1MTgxODIwOX0.HGiHK9cDPTv3p8-g3vD0i2dHBSf8gZ0M0iV1FIRTAIg';
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Drag over event
const handleDragOver = (e) => {
  e.preventDefault();
};

// Handle file drop
const handleDrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    setImage(file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  }
};


  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Upload event to Supabase
  const uploadEvent = async () => {
    if (!englishHeading.trim()) {
      setMessage('Please add an English heading');
      return;
    }
    if (!englishDescription.trim()) {
      setMessage('Please add an English description');
      return;
    }
    if (!image) {
      setMessage('Please select an image');
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      // Generate folder name from timestamp
      const folderName = Date.now().toString();

      // Upload the image
      const imageFileName = `${folderName}/${Date.now()}-${image.name}`;
      const { error: imageError } = await supabase.storage
        .from('upcoming_events')
        .upload(imageFileName, image);

      if (imageError) throw imageError;

      // Upload text files for each language
      const textFiles = [
        { fileName: `${folderName}/english_heading.txt`, content: englishHeading },
        { fileName: `${folderName}/english_description.txt`, content: englishDescription },
        { fileName: `${folderName}/kannada_heading.txt`, content: kannadaHeading },
        { fileName: `${folderName}/kannada_description.txt`, content: kannadaDescription },
        { fileName: `${folderName}/malayalam_heading.txt`, content: malayalamHeading },
        { fileName: `${folderName}/malayalam_description.txt`, content: malayalamDescription },
      ];

      for (const file of textFiles) {
        const blob = new Blob([file.content], { type: 'text/plain' });
        const { error } = await supabase.storage
          .from('upcoming_events')
          .upload(file.fileName, blob);

        if (error) throw error;
      }

      setMessage('Event uploaded successfully!');
      setImage(null);
      setImagePreview(null);
      setEnglishHeading('');
      setEnglishDescription('');
      setKannadaHeading('');
      setKannadaDescription('');
      setMalayalamHeading('');
      setMalayalamDescription('');
    } catch (error) {
      setMessage(`Error uploading event: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Form fields */}
      <div className="mb-6 space-y-4">
        {/* English fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">English Heading</label>
          <input
            type="text"
            value={englishHeading}
            onChange={(e) => setEnglishHeading(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter English heading"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">English Description</label>
          <textarea
            value={englishDescription}
            onChange={(e) => setEnglishDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter English description"
          />
        </div>

        {/* Kannada fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kannada Heading</label>
          <input
            type="text"
            value={kannadaHeading}
            onChange={(e) => setKannadaHeading(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Kannada heading"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kannada Description</label>
          <textarea
            value={kannadaDescription}
            onChange={(e) => setKannadaDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Kannada description"
          />
        </div>

        {/* Malayalam fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Malayalam Heading</label>
          <input
            type="text"
            value={malayalamHeading}
            onChange={(e) => setMalayalamHeading(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Malayalam heading"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Malayalam Description</label>
          <textarea
            value={malayalamDescription}
            onChange={(e) => setMalayalamDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Malayalam description"
          />
        </div>
      </div>

      {/* File drop area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors duration-200"
      >
        <div className="flex flex-col items-center">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="max-h-48 rounded-lg" />
          ) : (
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
          )}
          <p className="text-gray-600 mb-2">Drag and drop image here, or</p>
          <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Browse Files
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        </div>
      </div>

      {/* Message and upload button */}
      {message && (
        <div className={`mt-4 p-3 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <button
        onClick={uploadEvent}
        disabled={uploading}
        className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {uploading ? 'Uploading...' : 'Upload Event'}
      </button>
    </div>
  );
};

export default UpcomingUpload;

