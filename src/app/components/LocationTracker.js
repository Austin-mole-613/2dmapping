import React, { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";

const LocationTracker = () => {
  const [locationData, setLocationData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [number,setNumber] = useState(0)

  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  // Update the locationData state and log the coordinates to the console every second
  useEffect(() => {
    const updateInterval = setInterval(() => {
      if (coords) {
        setLocationData({
          latitude: coords.latitude,
          longitude: coords.longitude,
          altitude: coords.altitude,
          heading: coords.heading,
          speed: coords.speed,
        });

        // Update the lastUpdated time
        setLastUpdated(new Date());
        setNumber(prev=>prev+1)
        console.log(coords)
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(updateInterval);
  }, [coords]);

  // Check for geolocation availability and enabled status
  if (!isGeolocationAvailable) {
    return <div>Your browser does not support Geolocation</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocation is not enabled</div>;
  }

  // Check if locationData is available, if not, show loading message
  if (!locationData) {
    return <div>Getting the location data&hellip;</div>;
  }

  // Render the location data table and lastUpdated time
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{locationData.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{locationData.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{locationData.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{locationData.heading}</td>
          </tr>
          <tr>
            <td>speed {number}</td>
            <td>{locationData.speed}</td>
          </tr>
        </tbody>
      </table>
      <div>Last Updated: {lastUpdated ? lastUpdated.toLocaleString() : "N/A"}</div>
    </div>
  );
};

export default LocationTracker;
