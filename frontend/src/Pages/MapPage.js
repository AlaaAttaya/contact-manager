import React from "react";
import Map from "../Components/Map";

const MapPage = ({ contacts }) => {
  return (
    <div>
      <h1>Map Page</h1>
      <Map contacts={contacts} />
    </div>
  );
};

export default MapPage;
