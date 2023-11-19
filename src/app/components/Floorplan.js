"use client"

// components/Floorplan.js
import React from 'react';

const Floorplan = ({ floorplanImage, deviceLatitude, deviceLongitude }) => {
  return (
    <div>
      <img src={floorplanImage} alt="Floorplan" style={{width:"200px"}}/>
      <div
        style={{
          position: 'absolute',
          top: calculateTopPosition(deviceLatitude),
          left: calculateLeftPosition(deviceLongitude),
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'red',
        }}
      />
    </div>
  );
};

const calculateTopPosition = (latitude) => {
  // Implement the logic to convert latitude to top position on the floorplan
};

const calculateLeftPosition = (longitude) => {
  // Implement the logic to convert longitude to left position on the floorplan
};

export default Floorplan;
