import React, { useState } from "react";
import axios from "axios";

const ModDash = () => {
  const [selectedType, setSelectedType] = useState(""); // Keeps track of selected type
  const [data, setData] = useState([]); // Stores fetched data
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value); // Update selected type
  };

  const handleFetchData = async () => {
    const type1 = selectedType;
    const type2 = localStorage.getItem("type");
    const username = localStorage.getItem("username");

    try {
      // Make a request to the updated API endpoint
      const response = await axios.get("http://localhost:5000/testing/get-mod-data", {
        params: {
          type1,
          type2,
          username,
        },
      });

      setData(response.data); // Store the fetched data
      setMessage("Data fetched successfully!");
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
      <div className="max-w-3xl w-full">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Mod Dashboard</h1>

          {error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <>
              <h3 className="text-2xl font-medium mb-2 text-center">Select Data Type</h3>
              <select
                value={selectedType}
                onChange={handleTypeChange}
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              >
                <option value="">--Select--</option>
                <option value="temperature">Temperature</option>
                <option value="humidity">Humidity</option>
                <option value="rainfall">Rainfall</option>
                <option value="windspeed">Windspeed</option>
                <option value="opi_edi">OPI/EDI</option>
              </select>

              <button
                onClick={handleFetchData}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Show Data
              </button>

              <p className="mt-4 text-center text-green-500 font-medium">{message}</p>
            </>
          )}
        </div>

        {/* Table for displaying the fetched data */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {data.length > 0 && (
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  {data[0] &&
                    Object.keys(data[0]).map((key) => (
                      <th key={key} className="px-4 py-2 border-b text-left">{key}</th>
                    ))}
                  <th className="px-4 py-2 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, i) => (
                      <td key={i} className="px-4 py-2 border-b">{value}</td>
                    ))}
                    <td className="px-4 py-2 border-b">
                      <input type="checkbox" /> <input type="checkbox" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModDash;
