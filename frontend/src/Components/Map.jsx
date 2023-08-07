import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/utilities.css";

const customIcon = L.icon({
  iconUrl: "/images/marker.png",
  iconSize: [100, 45],
  iconAnchor: [32, 32],
});

const Map = ({ contacts }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "900px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {contacts.map((contact) => {
        const addressparsed = JSON.parse(contact.address);
        const imageUrl = "http://127.0.0.1:8000" + contact.image;

        return (
          <Marker
            key={contact.id}
            position={[addressparsed.latitude, addressparsed.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className="popup-image-container">
                <img
                  className="popup-image"
                  src={imageUrl}
                  alt={`${contact.name}'s Image`}
                />
              </div>
              <strong>{contact.name}</strong>
              <br />
              Phone: {contact.phone_number}
              <br />
              Address: {contact.address}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
