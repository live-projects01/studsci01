import React, { useState, useRef } from "react";
import axios from "axios";

const Modtest = () => {
  const [selectedType, setSelectedType] = useState("");
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const commentRefs = useRef({});
  const [rejectedRows, setRejectedRows] = useState(new Set());

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleFetchData = async () => {
    const type1 = selectedType;
    const type2 = localStorage.getItem("type");
    const username = localStorage.getItem("username");

    try {
      const response = await axios.get("http://localhost:5000/testing/get-mod-data", {
        params: { type1, type2, username }
      });
      setData(response.data);
      setMessage("Data fetched successfully!");
      setRejectedRows(new Set());
      commentRefs.current = {};
    } catch (err) {
      setError("Failed to fetch data.");
    }
  };

  const handleReject = async (rowId) => {
    if (rejectedRows.has(rowId)) return;
    
    const comment = commentRefs.current[rowId]?.value;
    if (!comment) return;

    try {
      await axios.post("http://localhost:5000/testing/reject-data", {
        rowId,
        comment
      });
      setRejectedRows(prev => new Set([...prev, rowId]));
    } catch (err) {
      console.error("Error rejecting data:", err);
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

        <div className="bg-white shadow-md rounded-lg p-6">
          {data.length > 0 && (
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key} className="px-4 py-2 border-b text-left">{key}</th>
                  ))}
                  <th className="px-4 py-2 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr 
                    key={row.row_id} 
                    className={rejectedRows.has(row.row_id) ? "bg-red-100" : ""}
                  >
                    {Object.values(row).map((value, i) => (
                      <td key={i} className="px-4 py-2 border-b">{value}</td>
                    ))}
                    <td className="px-4 py-2 border-b">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          ref={el => commentRefs.current[row.row_id] = el}
                          className="flex-1 border border-gray-300 rounded px-2 py-1"
                          placeholder="Enter comment..."
                          disabled={rejectedRows.has(row.row_id)}
                        />
                        <button
                          onClick={() => handleReject(row.row_id)}
                          className={`text-white px-4 py-1 rounded whitespace-nowrap ${
                            rejectedRows.has(row.row_id) 
                              ? "bg-gray-400 cursor-not-allowed" 
                              : "bg-red-500 hover:bg-red-600"
                          }`}
                          disabled={rejectedRows.has(row.row_id)}
                        >
                          {rejectedRows.has(row.row_id) ? "Rejected" : "Reject"}
                        </button>
                      </div>
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

export default Modtest;