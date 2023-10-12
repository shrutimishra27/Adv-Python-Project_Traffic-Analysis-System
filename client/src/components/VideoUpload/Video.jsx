import { useState, useEffect } from "react";
import "./Video.css";
import video from "./detected_video.mp4"

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
    <div className="vcontainer">
      {uploading ? (
        <p className="uploading-message">Uploading and Detecting Video...</p>
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
            <source src={video} type="video/mp4" className="detected" />
            Your browser does not support the video tag.
          </video>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};
export default Video;
