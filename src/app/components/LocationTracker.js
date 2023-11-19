import React, { useState, useEffect } from "react";

const LocationTracker = () => {
  const [locationData, setLocationData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const successCallback = (position) => {
    const coords = position.coords;
    setLocationData({
      latitude: coords.latitude,
      longitude: coords.longitude,
      altitude: coords.altitude,
      heading: coords.heading,
      speed: coords.speed,
      accuracy: coords.accuracy,
    });
    setLastUpdated(new Date());
  };

  const errorCallback = (error) => {
    console.error("Error getting location:", error);
  };

  useEffect(() => {
    // Set up a listener for continuous location updates
    const watchId = navigator.geolocation.watchPosition(
      successCallback,
      errorCallback,
      { enableHighAccuracy: true }
    );

    // Clean up the watchPosition listener on component unmount
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  // Render the location data table, lastUpdated time, and fetch location button
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{locationData?.latitude || "N/A"}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{locationData?.longitude || "N/A"}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{locationData?.altitude || "N/A"}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{locationData?.heading || "N/A"}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{locationData?.speed || "N/A"}</td>
          </tr>
          <tr>
            <td>accuracy</td>
            <td>{locationData?.accuracy || "N/A"}</td>
          </tr>
        </tbody>
      </table>
      <div>Last Updated: {lastUpdated ? lastUpdated.toLocaleString() : "N/A"}</div>
    </div>
  );
};

export default LocationTracker;
