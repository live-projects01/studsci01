import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentDash = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    data_date: "",
    reading1: "",
    reading2: "",
    reading3: "",
    reading4: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuthorization = async () => {
      const schoolCode = localStorage.getItem("school_code");
      const deviceCode = localStorage.getItem("device_code");
      console.log(schoolCode)
      console.log(deviceCode)
      try {
        const response = await axios.post("http://localhost:5000/api/check-device", {
          school_code: schoolCode,
          device_code: deviceCode,
        });

        if (response.data.authorized) {
          setIsAuthorized(true);
        } else {
          setError("Unauthorized access. You are not allowed to use this device.");
        }
      } catch (err) {
        console.error("Authorization check failed:", err);
        setError("Failed to verify authorization.");
      }
    };

    checkAuthorization();
  }, []);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setFormData({
      data_date: "",
      reading1: "",
      reading2: "",
      reading3: "",
      reading4: "",
    });
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
    const schoolCode = localStorage.getItem("school_code");

    try {
      await axios.post("http://localhost:5000/api/upload-data", {
        school_code: schoolCode,
        data_type: selectedType,
        data_date: formData.data_date,
        reading1: formData.reading1,
        reading2: formData.reading2,
        reading3: formData.reading3,
        reading4: formData.reading4,
      });

      setMessage("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      setMessage("Failed to submit data.");
    }
  };

  const getFields = () => {
    switch (selectedType) {
      case "temperature":
      case "humidity":
      case "rainfall":
        return [
          { name: "reading1", label: "Morning Reading", type: "number" },
          { name: "reading2", label: "Afternoon Reading", type: "number" },
          { name: "reading3", label: "Evening Reading", type: "number" },
        ];
      case "windspeed":
        return [
          { name: "reading1", label: "Morning Reading", type: "number" },
          { name: "reading2", label: "Afternoon Reading", type: "number" },
          { name: "reading3", label: "Evening Reading", type: "number" },
          { name: "reading4", label: "Direction (N/S/W/E)", type: "text" },
        ];
      case "opi_edi":
        return [
          { name: "reading1", label: "OPI", type: "number" },
          { name: "reading2", label: "EDI", type: "number" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
      {isAuthorized ? (
        <div className="max-w-3xl w-full">
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">Welcomeeeee</h1>
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

              <div>
                <label className="block font-medium mb-2">Date</label>
                <input
                  type="date"
                  name="data_date"
                  value={formData.data_date}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
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
                    required={field.name !== "reading4"}
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
      ) : (
        <p className="text-red-500 font-medium text-center">{error}</p>
      )}
    </div>
  );
};

export default StudentDash;
