import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const ModeratorRegister = () => {
  const [moderatorUsername, setModeratorUsername] = useState("");
  const [moderatorMail, setModeratorMail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [pwd, setPwd] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [message, setMessage] = useState("");

  // Check if user is a college admin
  const adminUsername = localStorage.getItem("username");
  const type = localStorage.getItem("type");

  if (type !== "CA") {
    return <p>You are not authorized to register a moderator.</p>;
  }

  const handleRegisterModerator = async () => {
    if (!moderatorUsername || !moderatorMail || !phNo || !photoUrl) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/admin/register-moderator", {
        admin_username: adminUsername,
        moderator_username: moderatorUsername,
        moderator_mail: moderatorMail,
        ph_no: phNo,
        photo_url: photoUrl,
        password: pwd
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error registering moderator:", error);
      setMessage("An error occurred while registering the moderator.");
    }
  };

  return (
    <>
    
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-full p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Register Moderator</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Moderator Username</label>
            <input
              type="text"
              value={moderatorUsername}
              onChange={(e) => setModeratorUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Moderator Password</label>
            <input
              type="text"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Moderator Mail</label>
            <input
              type="email"
              value={moderatorMail}
              onChange={(e) => setModeratorMail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phNo}
              onChange={(e) => setPhNo(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            onClick={handleRegisterModerator}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register Moderator
          </button>

          {message && <p className="mt-6 text-center text-sm text-gray-600">{message}</p>}
        </div>
      </div>
    </div>
    </>
  );
};

export default ModeratorRegister;
