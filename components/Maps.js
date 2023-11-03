import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import dotenv from "dotenv";

dotenv.config();

const Maps = ({ lat, long }) => {
  const containerStyle = {
    width: "500px",
    height: "500px",
  };

  const center = {
    lat: lat,
    long: long,
  };

  const apiKey =
    process.env.MAPS_API_KEY || "AIzaSyCcax5Kk1c3hCkvEdO5V8cJ1FIeeuVmWS0";

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Maps;
