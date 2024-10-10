// src/pages/Home.js
import React from 'react';
import VideoSlider from '../components/VideoSlider'; // Adjust the path as necessary
import './Home.css';

function Home() {
  const videoUrl = 'https://videos.pexels.com/video-files/6994619/6994619-uhd_2560_1440_30fps.mp4';

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to FirstShop</h1>
        <p>Your one-stop shop for quality products</p>
        <button className="shop-now-button">Shop Now</button>
      </div>

      {/* Video Slider Section */}
      <section className="video-slider-section">
        <h2>Featured Video</h2>
        <VideoSlider videoUrl={videoUrl} />
      </section>
    </div>
  );
}

export default Home;

