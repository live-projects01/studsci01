import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentDash = () => {
  const [schoolName, setSchoolName] = useState("Loading...");
  const [locationName, setLocationName] = useState("Loading...");
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch school and location info
    const fetchSchoolInfo = async () => {
      const type = localStorage.getItem("type");
      const username = localStorage.getItem("username");

      try {
        const response = await axios.post("http://localhost:5000/testing/student-info", {
          type,
          username,
        });
        setSchoolName(response.data.schoolName);
        setLocationName(response.data.locationName);
      } catch (err) {
        console.error("Error fetching school info:", err);
        setError("Failed to fetch school information.");
      }
    };

    fetchSchoolInfo();
  }, []);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/testing/upload-data", {
        type: selectedType,
        data: formData,
        locationName: locationName,
        schoolName: schoolName
      });
      setMessage("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      setMessage("Failed to submit data.");
    }
  };

  const getFields = () => {
    const commonFields = [
      { name: "month_number", label: "Month Number", type: "number" },
      { name: "week_number", label: "Week Number", type: "number" },
      { name: "day_number", label: "Day Number", type: "number" },
    ];

    switch (selectedType) {
      case "temperature":
      case "humidity":
      case "rainfall":
        return [
          ...commonFields,
          { name: "morning_reading", label: "Morning Reading", type: "number" },
          { name: "afternoon_reading", label: "Afternoon Reading", type: "number" },
          { name: "evening_reading", label: "Evening Reading", type: "number" },
        ];
      case "windspeed":
        return [
          ...commonFields,
          { name: "morning_reading", label: "Morning Reading", type: "number" },
          { name: "afternoon_reading", label: "Afternoon Reading", type: "number" },
          { name: "evening_reading", label: "Evening Reading", type: "number" },
          { name: "direction", label: "Direction (N/S/W/E)", type: "text" },
        ];
      case "opi_edi":
        return [
          { name: "index", label: "Index (od/ed)", type: "text" },
          { name: "opi_edi", label: "OPI/EDI", type: "number" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
      <div className="max-w-3xl w-full">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome Student</h1>
          {error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <>
              <h2 className="text-2xl font-medium mb-2">
                School Name: <span className="text-blue-500">{schoolName}</span>
              </h2>
              <h2 className="text-2xl font-medium">
                Location: <span className="text-green-500">{locationName}</span>
              </h2>
            </>
          )}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-center">Upload Data</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium mb-2">Select Data Type</label>
              <select
                value={selectedType}
                onChange={handleTypeChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              >
                <option value="">--Select--</option>
                <option value="temperature">Temperature</option>
                <option value="humidity">Humidity</option>
                <option value="rainfall">Rainfall</option>
                <option value="windspeed">Windspeed</option>
                <option value="opi_edi">OPI/EDI</option>
              </select>
            </div>

            {getFields().map((field) => (
              <div key={field.name}>
                <label className="block font-medium mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-green-500 font-medium">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
