import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const EventUpload = () => {
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const supabaseUrl = 'https://sfqoiwmaxoxpaibcplo.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcW9pd21heG94cGFpYmNwbG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDIyMDksImV4cCI6MjA1MTgxODIwOX0.HGiHK9cDPTv3p8-g3vD0i2dHBSf8gZ0M0iV1FIRTA';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // Create preview URL for the image
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const uploadEvent = async () => {
    if (!heading.trim()) {
      setMessage('Please add a heading for this event');
      return;
    }

    if (!description.trim()) {
      setMessage('Please add a description for this event');
      return;
    }

    if (!image) {
      setMessage('Please select an image');
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      // Create a folder name from the heading (sanitized)
      const folderName = heading.toLowerCase().replace(/[^a-z0-9]/g, '-');
      
      // Upload the image
      const imageFileName = `${folderName}/${Date.now()}-${image.name}`;
      const { error: imageError } = await supabase.storage
        .from('events')
        .upload(imageFileName, image);

      if (imageError) throw imageError;

      // Create and upload the metadata JSON file
      const metadata = {
        heading: heading,
        description: description,
        imageName: image.name,
        imageUrl: imageFileName,
        timestamp: new Date().toISOString()
      };

      const metadataBlob = new Blob([JSON.stringify(metadata, null, 2)], {
        type: 'application/json'
      });

      const { error: metadataError } = await supabase.storage
        .from('events')
        .upload(`${folderName}/metadata.json`, metadataBlob);

      if (metadataError) throw metadataError;

      setMessage('Event uploaded successfully!');
      setImage(null);
      setImagePreview(null);
      setHeading('');
      setDescription('');
    } catch (error) {
      setMessage(`Error uploading event: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Heading
          </label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter event heading"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter event description"
          />
        </div>
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors duration-200"
      >
        <div className="flex flex-col items-center">
          {imagePreview ? (
            <div className="mb-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 rounded-lg"
              />
            </div>
          ) : (
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
          )}
          <p className="text-gray-600 mb-2">Drag and drop image here, or</p>
          <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Browse Files
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {image && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Selected Image
          </h3>
          <div className="p-2 bg-gray-50 rounded flex items-center justify-between">
            <span className="text-sm text-gray-600">{image.name}</span>
            <span className="text-xs text-gray-500">
              {(image.size / 1024).toFixed(2)} KB
            </span>
          </div>
        </div>
      )}

      {message && (
        <div className={`mt-4 p-3 rounded ${
          message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {message}
        </div>
      )}

      <button
        onClick={uploadEvent}
        disabled={uploading || !image || !heading || !description}
        className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {uploading ? 'Uploading...' : 'Upload Event'}
      </button>
    </div>
  );
};

export default EventUpload;