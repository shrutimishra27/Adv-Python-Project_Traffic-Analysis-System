import React from 'react';
import './Detect.css'
import video from './detected_video.mp4'

function VideoPlayer() {
  return (
    <div>
      <h1>Helmet Detection Video</h1>
      <video controls width="640" height="360">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
