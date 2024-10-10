// src/components/VideoSlider.js
import React from 'react';
import './VideoSlider.css'; // Create this CSS file for styling if needed

const VideoSlider = ({ videoUrl }) => {
  return (
    <div className="video-slider">
      <video 
        src={videoUrl} 
        autoPlay 
        loop 
        muted 
        style={{ width: '100%', height: 'auto' }} 
      />
    </div>
  );
};

export default VideoSlider;

