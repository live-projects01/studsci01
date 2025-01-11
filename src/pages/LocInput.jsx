import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LocInput = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5001/api1/locations')
      .then(res => res.json())
      .then(data => setLocations(data))
      .catch(err => console.error('Error fetching locations:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLocation) {
      navigate(`/report/${selectedLocation}`);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          Temperature Report
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ 
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              Select Location
            </label>
            <input
              list="locations"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              placeholder="Type location name..."
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                marginBottom: '1rem'
              }}
            />
            <datalist id="locations">
              {locations.map((loc) => (
                <option key={loc.loc_id} value={loc.loc_name} />
              ))}
            </datalist>
          </div>
          <button 
            type="submit" 
            disabled={!selectedLocation}
            style={{
              width: '100%',
              padding: '0.5rem',
              backgroundColor: selectedLocation ? '#3b82f6' : '#93c5fd',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: selectedLocation ? 'pointer' : 'not-allowed'
            }}
          >
            Get Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocInput;