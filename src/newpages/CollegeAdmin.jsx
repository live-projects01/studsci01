import React, { useState, useEffect } from "react";
import axios from "axios";

const CollegeAdmin = () => {
  const [assignModeratorUsername, setAssignModeratorUsername] = useState("");
  const [deleteModeratorUsername, setDeleteModeratorUsername] = useState("");
  const [schoolCode, setSchoolCode] = useState("");
  const [deleteSchoolCode, setDeleteSchoolCode] = useState("");
  const [message, setMessage] = useState("");
  const [moderators, setModerators] = useState([]);

  const handleAssignSchool = async () => {
    const type1 = localStorage.getItem("type");

    try {
      const response = await axios.post("http://localhost:5000/admin/assign-school", {
        type1,
        moderatorUsername: assignModeratorUsername,
        schoolCode,
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error assigning school:", error);
      setMessage("An error occurred while assigning the school.");
    }
  };

  const handleDeleteSchool = async () => {
    const type1 = localStorage.getItem("type");

    try {
      const response = await axios.post("http://localhost:5000/admin/delete-school", {
        type1,
        moderatorUsername: deleteModeratorUsername,
        schoolCode: deleteSchoolCode,
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error deleting school:", error);
      setMessage("An error occurred while deleting the school.");
    }
  };

  // Fetch moderators and their assigned schools
  useEffect(() => {
    const fetchModerators = async () => {
      const adminUsername = localStorage.getItem("username");

      try {
        const response = await axios.get("http://localhost:5000/admin/get-moderators", {
          headers: {
            'admin-username': adminUsername,
          },
        });
        setModerators(response.data.moderators);
      } catch (error) {
        console.error("Error fetching moderators:", error);
        setMessage("An error occurred while fetching the moderators.");
      }
    };

    fetchModerators();
  }, []);

  return (
    <>

                                    



    <div className="min-h-screen flex bg-gray-100">
      <div className="w-1/2 p-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Assign School to Moderator</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Moderator Username</label>
            <input
              type="text"
              value={assignModeratorUsername}
              onChange={(e) => setAssignModeratorUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">School Code</label>
            <input
              type="text"
              value={schoolCode}
              onChange={(e) => setSchoolCode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleAssignSchool}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Assign School
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Delete School from Moderator</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Moderator Username</label>
            <input
              type="text"
              value={deleteModeratorUsername}
              onChange={(e) => setDeleteModeratorUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">School Code</label>
            <input
              type="text"
              value={deleteSchoolCode}
              onChange={(e) => setDeleteSchoolCode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleDeleteSchool}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete School
          </button>
        </div>

        {message && <p className="mt-6 text-center text-sm text-gray-600">{message}</p>}
      </div>

      {/* Right half: Table showing moderators and assigned schools */}
      <div className="w-1/2 p-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Moderators and Assigned Schools</h2>
        {moderators.length === 0 ? (
          <p>No moderators found for your college.</p>
        ) : (
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Moderator Username</th>
                <th className="px-4 py-2 text-left">Assigned Schools</th>
              </tr>
            </thead>
            <tbody>
              {moderators.map((moderator, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{moderator.moderatorUsername}</td>
                  <td className="px-4 py-2">
                    {moderator.assignedSchools.length > 0
                      ? moderator.assignedSchools.join(", ")
                      : "No schools assigned"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </>
  );
};

export default CollegeAdmin;
