import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ImageUploadForm = () => {
  const [searchParams] = useSearchParams();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const school_code = searchParams.get('school_code');
  const kiosk_id = searchParams.get('kiosk_id');

  useEffect(() => {
    if (!school_code || !kiosk_id) {
      setError('Missing required URL parameters: school_code or kiosk_id');
    } else {
      setError('');
    }
  }, [school_code, kiosk_id]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!school_code || !kiosk_id) {
      setError('Missing required URL parameters');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const formPayload = new FormData();
      formPayload.append('image', file);
      formPayload.append('school_code', school_code);
      formPayload.append('kiosk_id', kiosk_id);

      const response = await fetch('http://localhost:5000/api/image/upload', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setMessage('Image uploaded successfully!');
      setFile(null);
      e.target.reset();
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Student Scientist Photo Kiosk
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Upload pics from the kiosk with ease by following these steps:
          </p>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">1</span>
              <p className="text-gray-700">Align your camera with the marked area as can be seen in the booth</p>
            </div>
            <div className="flex items-start">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">2</span>
              <p className="text-gray-700">Click the pic</p>
            </div>
            <div className="flex items-start">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">3</span>
              <p className="text-gray-700">Attach the pic in the form below and click 'Upload Image'</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-green-600 font-medium text-center">All done!</p>
          </div>
        </div>

        {/* Upload Form Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Upload Image</h2>
          
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">
                Choose Image
              </label>
              <input
                type="file"
                id="file_input"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none hover:bg-gray-100 transition-colors"
                required
                disabled={!!error}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !!error || !file}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Uploading...' : 'Upload Image'}
            </button>

            {message && (
              <div className={`p-4 rounded-lg ${
                message.startsWith('Error') 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadForm;