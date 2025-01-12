import React, { useState } from 'react';
import axios from 'axios';

const SchoolImageCheck = () => {
    const [photoUrls, setPhotoUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPhotoData = async () => {
        setLoading(true);
        setError(null);

        const schoolCode = localStorage.getItem("school_code"); // Assuming you have stored school_code in localStorage
        console.log(schoolCode)

        try {
            const response = await axios.post('http://localhost:5000/api/photo-data', {
                school_code: schoolCode,
            });
            console.log(response.data.photo_urls)
            setPhotoUrls(response.data.photo_urls);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to fetch photo data');
        } finally {
            setLoading(false);
        }
    };

    const acknowledgePhoto = async (photoUrl) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/api/acknowledge', {
                photo_url: photoUrl,
            });
            alert(response.data.message); // Show success message
            // Remove the acknowledged photo from the state
            setPhotoUrls(prevUrls => prevUrls.filter(url => url !== photoUrl));
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to acknowledge photo');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">School Image Check</h1>

            <button
                onClick={fetchPhotoData}
                className="bg-blue-500 text-white p-2 rounded mb-4"
            >
                Get Photo Data
            </button>

            {/* Loading state */}
            {loading && <p>Loading photo data...</p>}

            {/* Error state */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Display images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photoUrls.map((url, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={ url}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <button
                                onClick={() => acknowledgePhoto(url)}
                                className="bg-red-500 text-white p-2 rounded"
                            >
                                Acknowledge
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchoolImageCheck;