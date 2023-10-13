import { useState, useEffect } from "react";
import "./Video.css";
import video from "./detected_video.mp4";

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

  const downloadVideo = () => {
    // Replace 'video-url.mp4' with the actual URL or path of your MP4 video
    const videoUrl = "video-url.mp4";

    fetch(videoUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "video.mp4"; // You can change the filename here
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading the video:", error);
      });
  };

  useEffect(() => {
    if (showPopup) {
      // You can add your code here to display the second video in a popup
    }
  }, [showPopup]);

  return (
    <>
      <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
        Get a Detected Video{" "}
      </h1>
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
            <h2>Upload a Video</h2>
            <h3>And get Detected Video</h3>
            <br />
            <img
              className="v-image"
              src="https://copyassignment.com/wp-content/uploads/2022/06/Violation_Detection_Frame-1024x602.jpg"
              alt=""
            />
            <br />
            <br />
            <br />
            <label htmlFor="fileInput">Upload Video</label>
          </div>
        )}
        {showPopup && (
          <div className="popup">
            <video controls>
              <source src={video} type="video/mp4" className="detected" />
              Your browser does not support the video tag.
            </video>
            <div className="button-container">
              <button onClick={closePopup}>Close</button>
              <button onClick={downloadVideo}>Download</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Video;
