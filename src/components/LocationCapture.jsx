import React, { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import { post } from "../utils/api";

const LocationCapture = () => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      getAddressFromCoords(coords.latitude, coords.longitude);
    }
  }, [coords]);

  const getAddressFromCoords = async (latitude, longitude) => {
    setLoading(true);
    setError(null);

    try {
      const body = {
        latitude: latitude,
        longitude: longitude,
      };

      const response = await post("/users/reverse-address", body);
      console.log("API RESPONSE", response);
    } catch (err) {
      setError("Failed to get address: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isGeolocationAvailable) {
    return (
      <div className="text-red-500">
        Your browser does not support Geolocation
      </div>
    );
  }

  if (!isGeolocationEnabled) {
    return <div className="text-yellow-500">Geolocation is not enabled</div>;
  }

  if (!coords) {
    return <div className="text-blue-500">Getting the location data...</div>;
  }

  return (
    <div className="max-w-md p-4 border rounded-lg shadow-sm">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-medium">Latitude</td>
            <td>{coords.latitude}</td>
          </tr>
          <tr>
            <td className="font-medium">Longitude</td>
            <td>{coords.longitude}</td>
          </tr>
          <tr>
            <td className="font-medium">Altitude</td>
            <td>{coords.altitude || "N/A"}</td>
          </tr>
          <tr>
            <td className="font-medium">Heading</td>
            <td>{coords.heading || "N/A"}</td>
          </tr>
          <tr>
            <td className="font-medium">Speed</td>
            <td>{coords.speed || "N/A"}</td>
          </tr>
          <tr>
            <td className="font-medium">Address</td>
            <td>
              {loading ? (
                <span className="text-gray-500">Loading address...</span>
              ) : error ? (
                <span className="text-red-500">{error}</span>
              ) : (
                <span>{address || "N/A"}</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LocationCapture;
