"use client"
// pages/index.js
import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import LocationTracker from './components/LocationTracker';
import Floorplan from './components/Floorplan';

const Home = () => {
  const [floorplanImage, setFloorplanImage] = useState(null);
  const [deviceLatitude, setDeviceLatitude] = useState(null);

  const handleImageUpload = (file) => {
    // Implement logic to upload the image and set it to the state
    setFloorplanImage(URL.createObjectURL(file));
  };

  const handleLocationUpdate = (latitude) => {
    // Update the device's latitude in the state
    setDeviceLatitude(latitude);
  };

  return (
    <div>
      <ImageUpload onUpload={handleImageUpload} />
      <LocationTracker onLocationUpdate={handleLocationUpdate} />
      <Floorplan floorplanImage={floorplanImage} deviceLatitude={deviceLatitude} />
    </div>
  );
};

export default Home;
