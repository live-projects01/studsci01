import React, { useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [schoolCode, setSchoolCode] = useState('');
  const [kioskId, setKioskId] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:5000/api/images', {
        params: {
          school_code: schoolCode,
          kiosk_id: kioskId,
          username: localStorage.getItem("username")
        },
      });
      setImages(response.data.images);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  const approveImage = async (imageName) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/approve', {
        school_code: schoolCode,
        kiosk_id: kioskId,
        image_name: imageName,
      });
      alert(response.data.message); // Show success message
      // Optionally, you can refresh the images after approval
      fetchImages();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to approve image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Image Gallery</h1>

      {/* Input fields for school_code and kiosk_id */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter School Code"
          value={schoolCode}
          onChange={(e) => setSchoolCode(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Enter Kiosk ID"
          value={kioskId}
          onChange={(e) => setKioskId(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button onClick={fetchImages} className="bg-blue-500 text-white p-2 rounded">
          Fetch Images
        </button>
      </div>

      {/* Loading state */}
      {loading && <p>Loading images...</p>}

      {/* Error state */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={`http://localhost:5000/api/images/${schoolCode}/${kioskId}/${image}`}
              alt={`Image ${index + 1}`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-sm text-gray-600">{image}</p>
              <button
                onClick={() => approveImage(image)}
                className="bg-green-500 text-white p-2 rounded mt-2"
              >
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;