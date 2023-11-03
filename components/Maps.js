import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Maps = ({ lat, long }) => {
  const containerStyle = {
    width: "500px",
    height: "500px",
  };

  const center = {
    lat: -3.745,
    long: -38.523,
  };

  //console.log(process.env);

  const apiKey = process.env.MAPS_API_KEY;

  //console.log(apiKey);

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
