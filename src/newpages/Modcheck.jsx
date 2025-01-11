import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modcheck = () => {
  const [dataType, setDataType] = useState("temperature");
  const [dataRows, setDataRows] = useState([]);
  const [comments, setComments] = useState({});
  const [rejectedRows, setRejectedRows] = useState(new Set());
  const [approvedRows, setApprovedRows] = useState(new Set());
  const [error, setError] = useState("");

  useEffect(() => {
    const authenticateModerator = async () => {
      try {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        const response = await axios.post('http://localhost:5000/mod-auth', {
          username,
          password,
        });
        console.log(response.data)

        if (!response.data.success) {
          setError("Authentication failed. Please check your credentials.");
        }
      } catch (err) {
        console.error('Error during authentication:', err);
        setError("Unable to authenticate. Please try again later.");
      }
    };

    authenticateModerator();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/mod-data', {
        params: {
          dataType,
          username: localStorage.getItem("username"),
        },
      });
      console.log(response.data)
      setDataRows(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleReject = async (rowId) => {
    const comment = comments[rowId] || '';
    try {
      await axios.post('http://localhost:5000/reject-data', {
        rowId,
        comment,
        username: localStorage.getItem("username"),
        dataType,
      });
      setRejectedRows((prev) => new Set(prev).add(rowId));
    } catch (error) {
      console.error('Error rejecting data:', error);
    }
  };

  const handleApprove = async (rowId) => {
    try {
      await axios.post('http://localhost:5000/approve-data', {
        rowId,
        username: localStorage.getItem("username"),
        dataType,
      });
      setApprovedRows((prev) => new Set(prev).add(rowId));
    } catch (error) {
      console.error('Error approving data:', error);
    }
  };

  if (error) {
    return <div className="text-red-500 text-center mt-6">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* UI remains similar */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Moderator Data Management
      </h1>
      <div className="flex flex-col items-center mb-6">
        <label
          htmlFor="dataType"
          className="text-lg font-medium mb-2 text-gray-700"
        >
          Select Data Type:
        </label>
        <select
          id="dataType"
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
          className="p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
        >
          <option value="temperature">Temperature</option>
          <option value="humidity">Humidity</option>
          <option value="rainfall">Rainfall</option>
          <option value="windspeed">Wind Speed</option>
          <option value="opi_edi">OPI EDI</option>
        </select>
        <button
          onClick={fetchData}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Get Data
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-3 border border-gray-300">ID</th>
              <th className="p-3 border border-gray-300">Data</th>
              <th className="p-3 border border-gray-300">Comment</th>
              <th className="p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row) => (
              <tr
                key={row.id}
                className={`${
                  approvedRows.has(row.id)
                    ? 'bg-green-100'
                    : rejectedRows.has(row.id)
                    ? 'bg-red-100'
                    : 'bg-white'
                }`}
              >
                <td className="p-3 border border-gray-300">{row.id}</td>
                <td className="p-3 border border-gray-300">
                  {Object.entries(row)
                    .filter(([key]) => key !== 'id') // Exclude ID from displayed data
                    .map(([key, value]) => (
                      <div key={key}>
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                </td>
                <td className="p-3 border border-gray-300">
                  <input
                    type="text"
                    value={comments[row.id] || ''}
                    onChange={(e) =>
                      setComments({ ...comments, [row.id]: e.target.value })
                    }
                    disabled={rejectedRows.has(row.id) || approvedRows.has(row.id)}
                    className="p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                  />
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  <button
                    onClick={() => handleApprove(row.id)}
                    disabled={
                      rejectedRows.has(row.id) || approvedRows.has(row.id)
                    }
                    className="px-3 py-1 mr-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 disabled:bg-gray-300"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(row.id)}
                    disabled={
                      rejectedRows.has(row.id) || approvedRows.has(row.id)
                    }
                    className="px-3 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 disabled:bg-gray-300"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modcheck;
