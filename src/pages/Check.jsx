import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Check = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleCheck = () => {
    if (input === "coastal123") {
      navigate("/home");
    } else {
      alert("Incorrect input, try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Enter the Code</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the code"
        style={{ padding: "10px", width: "200px" }}
      />
      <button
        onClick={handleCheck}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        OK
      </button>
    </div>
  );
};

export default Check;
