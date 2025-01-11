import React, { useState } from 'react';
import im1 from '../assets/Anekal Public school, Anekal.jpg'; // Your image

const areas = [
  // Top Left Area (coords: x1,y1,x2,y2)
  { id: 1, coords: '0,0,10,100', label: 'Top Left', data: 'Information for Top Left' },
  // Top Right Area
  { id: 2, coords: '500,0,1,500', label: 'Top Right', data: 'Information for Top Right' },
  // Bottom Left Area
  { id: 3, coords: '0,500,500,1000', label: 'Bottom Left', data: 'Information for Bottom Left' },
  // Bottom Right Area
  { id: 4, coords: '500,500,1000,1000', label: 'Bottom Right', data: 'Information for Bottom Right' },
];

function MapTest() {
  const [areaData, setAreaData] = useState(null);

  const handleAreaClick = (area) => {
    setAreaData(area.data);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Clickable Image Example</h1>

      {/* Image with clickable areas */}
      <div className="relative mb-10 w-full max-w-4xl">
        <img
          src={im1} // Random image
          alt="Random Map"
          useMap="#image-map"
          className="w-full rounded-lg shadow-lg"
        />
        <map name="image-map">
          {areas.map((area) => (
            <area
              key={area.id}
              shape="rect"
              coords={area.coords} // Coordinates for the clickable area
              alt={area.label}
              title={area.label}
              href="javascript:void(0);"
              onClick={() => handleAreaClick(area)}
            />
          ))}
        </map>
      </div>

      {/* Display information for the clicked area */}
      {areaData && (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Area Information</h3>
          <p>{areaData}</p>
        </div>
      )}
    </div>
  );
}

export default MapTest;
