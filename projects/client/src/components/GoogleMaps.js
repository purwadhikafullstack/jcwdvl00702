import React from "react";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container } from "@mui/material";
import "../assets/styles/GoogleMaps.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function NewAddress() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </>
  );
}
