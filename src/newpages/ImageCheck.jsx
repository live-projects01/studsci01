import React, { useState } from "react";
import axios from "axios";

const ImageCheck = () => {
  const [schoolCode, setSchoolCode] = useState("");
  const [kioskId, setKioskId] = useState("");
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState({});

  const handleGetData = async () => {
    const username = localStorage.getItem("username");

    if (!username || !schoolCode || !kioskId) {
      alert("Please provide all fields and ensure you're logged in.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/get-images", {
        username,
        school_code: schoolCode,
        kiosk_id: kioskId,
      });

      setImages(response.data.images || []);
      
    } catch (error) {
      console.error("Error fetching images:", error);
      alert("Failed to fetch images.");
    }
  };

  const handleVerify = async (imagePath) => {
    try {
      await axios.post("http://localhost:5000/photo-verify", { image_path: imagePath });
      alert("Photo verified successfully.");
      setImages(images.filter((img) => img.path !== imagePath));
    } catch (error) {
      console.error("Error verifying photo:", error);
      alert("Failed to verify photo.");
    }
  };

  const handleReject = async (imagePath) => {
    const comment = comments[imagePath];

    if (!comment) {
      alert("Please provide a comment before rejecting the photo.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/reject-photo", { image_path: imagePath, comment });
      alert("Photo rejected successfully.");
      setImages(images.filter((img) => img.path !== imagePath));
    } catch (error) {
      console.error("Error rejecting photo:", error);
      alert("Failed to reject photo.");
    }
  };

  const handleCommentChange = (imagePath, value) => {
    setComments({ ...comments, [imagePath]: value });
  };

  return (
    <div>
      <h1>Image Verification</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGetData();
        }}
      >
        <div>
          <label>School Code:</label>
          <input
            type="text"
            value={schoolCode}
            onChange={(e) => setSchoolCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Kiosk ID:</label>
          <input
            type="text"
            value={kioskId}
            onChange={(e) => setKioskId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get Data</button>
      </form>

      <div>
        {images.map((image) => (
          <div key={image.path} style={{ marginBottom: "20px" }}>
            <img src={image.url} alt="Image" style={{ maxWidth: "100%" }} />
            <textarea
              placeholder="Add a comment"
              value={comments[image.path] || ""}
              onChange={(e) => handleCommentChange(image.path, e.target.value)}
              style={{ display: "block", width: "100%" }}
            ></textarea>
            <button onClick={() => handleVerify(image.path)}>Verify</button>
            <button onClick={() => handleReject(image.path)}>Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCheck;