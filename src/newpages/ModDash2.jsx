import React, { useState } from "react";
import axios from "axios";

const Modtest = () => {
  const [selectedType, setSelectedType] = useState("");
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [comments, setComments] = useState({});
  const [showCommentBox, setShowCommentBox] = useState({});

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
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data.");
    }
  };

  const handleNo = (rowId) => {
    setShowCommentBox(prev => ({
      ...prev,
      [rowId]: true
    }));
  };

  const handleCommentChange = (rowId, value) => {
    setComments(prev => ({
      ...prev,
      [rowId]: value
    }));
  };

  const handleSubmitComment = async (rowId) => {
    try {
      await axios.post("http://localhost:5000/testing/reject-data", {
        rowId,
        comment: comments[rowId]
      });
      
      // Remove the row from the UI
      setData(prev => prev.filter(row => row.row_id !== rowId));
      setShowCommentBox(prev => ({
        ...prev,
        [rowId]: false
      }));
      setComments(prev => ({
        ...prev,
        [rowId]: ""
      }));
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
      <div className="max-w-3xl w-full">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center">HELLOOOOO</h1>
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
                  <React.Fragment key={row.row_id}>
                    <tr>
                      {Object.values(row).map((value, i) => (
                        <td key={i} className="px-4 py-2 border-b">{value}</td>
                      ))}
                      <td className="px-4 py-2 border-b">
                        <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                          YES
                        </button>
                        <button 
                          onClick={() => handleNo(row.row_id)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          NO
                        </button>
                      </td>
                    </tr>
                    {showCommentBox[row.row_id] && (
                      <tr>
                        <td colSpan={Object.keys(row).length + 1} className="px-4 py-2 border-b">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={comments[row.row_id] || ""}
                              onChange={(e) => handleCommentChange(row.row_id, e.target.value)}
                              className="flex-1 border border-gray-300 rounded px-2 py-1"
                              placeholder="Enter comment..."
                            />
                            <button
                              onClick={() => handleSubmitComment(row.row_id)}
                              className="bg-blue-500 text-white px-4 py-1 rounded"
                            >
                              Submit
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
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