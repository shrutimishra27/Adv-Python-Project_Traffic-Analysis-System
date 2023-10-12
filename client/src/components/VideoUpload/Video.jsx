import React, { useState, useEffect } from "react";
import "./Video.css";

const Video = () => {
  const [uploading, setUploading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleUpload = () => {
    setUploading(true);

    setTimeout(() => {
      setShowPopup(true);
    }, 15000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      // You can add your code here to display the second video in a popup
    }
  }, [showPopup]);

  return (
    <div className="container">
      {uploading ? (
        <p className="uploading-message">Uploading video...</p>
      ) : (
        <div className="video-uploader">
          <input
            type="file"
            accept="video/*"
            onChange={handleUpload}
            id="fileInput"
          />
          <label htmlFor="fileInput">Upload Video</label>
        </div>
      )}
      {showPopup && (
        <div className="popup">
          <video controls>
            <source src="URL_TO_YOUR_SECOND_VIDEO.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};
export default Video;
