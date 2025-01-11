import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SchoolAdmin = () => {
  const [schoolCode, setSchoolCode] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const [updatedReadings, setUpdatedReadings] = useState({});

  // Fetch school code upon initial load
  useEffect(() => {
    const fetchSchoolCode = async () => {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');

      try {
        const response = await axios.post('http://localhost:5000/schl-admin-check', { username, password });
        if (response.data.school_code) {
          localStorage.setItem('school_code', response.data.school_code);
          setSchoolCode(response.data.school_code);
        } else {
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error('Error during authentication', error);
      }
    };

    fetchSchoolCode();
  }, []);

  // Fetch comments when the button is clicked
  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-comments', {
        params: { school_code: schoolCode },
      });
      setCommentsData(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Handle reading updates
  const handleReadingChange = (rowId, readingType, value) => {
    setUpdatedReadings((prev) => ({
      ...prev,
      [rowId]: {
        ...prev[rowId],
        [readingType]: value,
      },
    }));
  };

  // Submit updated readings
  const handleSubmitEdit = async (rowId) => {
    const { reading1, reading2, reading3 } = updatedReadings[rowId] || {};
    try {
      // Ensure that we are passing all three fields, even if not changed
      await axios.post('http://localhost:5000/edit-reading', {
        rowId,
        reading1: reading1 || null, // Allow null if not provided
        reading2: reading2 || null,
        reading3: reading3 || null,
      });
      alert('Data updated successfully');
    } catch (error) {
      console.error('Error updating readings:', error);
    }
  };

  // Reject comment
  const handleReject = async (commentId) => {
    try {
      await axios.post('http://localhost:5000/reject-comment', { commentId });
      setCommentsData((prev) => prev.filter((comment) => comment.id !== commentId));
      alert('Comment rejected successfully');
    } catch (error) {
      console.error('Error rejecting comment:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        School Admin Panel
      </h1>
      <button
        onClick={fetchComments}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
      >
        Get Comments on Data
      </button>
      {commentsData.length > 0 && (
        <div className="overflow-x-auto mt-6">
          <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 border border-gray-300">ID</th>
                <th className="p-3 border border-gray-300">Date</th>
                <th className="p-3 border border-gray-300">Reading 1</th>
                <th className="p-3 border border-gray-300">Reading 2</th>
                <th className="p-3 border border-gray-300">Reading 3</th>
                <th className="p-3 border border-gray-300">Comment</th>
                <th className="p-3 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {commentsData.map((comment) => (
                <tr key={comment.id}>
                  <td className="p-3 border border-gray-300">{comment.id}</td>
                  <td className="p-3 border border-gray-300">{comment.data_date}</td>
                  <td className="p-3 border border-gray-300">
                    {comment.reading1}
                    <input
                      type="number"
                      placeholder="Enter new reading"
                      className="mt-1 p-2 w-full"
                      value={updatedReadings[comment.row_id]?.reading1 || ''}
                      onChange={(e) => handleReadingChange(comment.row_id, 'reading1', e.target.value)}
                    />
                  </td>
                  <td className="p-3 border border-gray-300">
                    {comment.reading2}
                    <input
                      type="number"
                      placeholder="Enter new reading"
                      className="mt-1 p-2 w-full"
                      value={updatedReadings[comment.row_id]?.reading2 || ''}
                      onChange={(e) => handleReadingChange(comment.row_id, 'reading2', e.target.value)}
                    />
                  </td>
                  <td className="p-3 border border-gray-300">
                    {comment.reading3}
                    <input
                      type="number"
                      placeholder="Enter new reading"
                      className="mt-1 p-2 w-full"
                      value={updatedReadings[comment.row_id]?.reading3 || ''}
                      onChange={(e) => handleReadingChange(comment.row_id, 'reading3', e.target.value)}
                    />
                  </td>
                  <td className="p-3 border border-gray-300">{comment.comment}</td>
                  <td className="p-3 border border-gray-300 text-center">
                    <button
                      onClick={() => handleSubmitEdit(comment.row_id)}
                      className="px-3 py-1 mr-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleReject(comment.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SchoolAdmin;
