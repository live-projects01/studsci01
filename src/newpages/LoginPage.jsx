import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userType, setUserType] = useState("SS"); // Default to School Student
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [deviceOTP, setDeviceOTP] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // Track if the device is registered
  const navigate = useNavigate();

  // Check if device_code exists in localStorage on page load
  useEffect(() => {
    const deviceCode = localStorage.getItem("device_code");
    if (deviceCode) {
      setIsRegistered(true);
    }
  }, []);

  const handleLogin = () => {
    // Store the values in localStorage based on the user type
    if (userType === "SS") {
      // Update school_code for students
      localStorage.setItem("school_code", username);
    } else {
      // Store password for other roles
      localStorage.setItem("username",username);
      localStorage.setItem("password", password);
    }

    // Navigate to the respective dashboard
    if (userType === "SS") navigate("/StudentDash");
    if (userType === "M") navigate("/Modbest");
    if (userType === "SA") navigate("/SchoolAdmin");
    if (userType === "CA") navigate("/CollegeAdmin");
  };

  const handleRegister = () => {
    if (!username || !deviceOTP) {
      alert("Please enter both School Code and Device OTP.");
      return;
    }

    // Save device_code to localStorage
    localStorage.setItem("device_code", deviceOTP);

    alert("Device registered successfully! Please login.");

    // After registration, switch to login flow
    setIsRegistered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {/* User Type Selector */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Role</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="block w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="SS">School Student</option>
            <option value="M">Moderator</option>
            <option value="SA">School Admin</option>
            <option value="CA">College Admin</option>
          </select>
        </div>

        {/* Username / School Code Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            {userType === "SS" ? "School Code" : "Username"}
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder={userType === "SS" ? "Enter School Code" : "Enter Username"}
          />
        </div>

        {/* Password Input (for non-student roles) */}
        {userType !== "SS" && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter Password"
            />
          </div>
        )}

        {/* Device OTP Input (only for unregistered devices and School Student) */}
        {!isRegistered && userType === "SS" && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Device OTP</label>
            <input
              type="text"
              value={deviceOTP}
              onChange={(e) => setDeviceOTP(e.target.value)}
              className="block w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter Device OTP"
            />
          </div>
        )}

        {/* Login / Register Button */}
        <button
          onClick={userType === "SS" ? (isRegistered ? handleLogin : handleRegister) : handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          {userType === "SS" ? (isRegistered ? "Login" : "Register") : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
