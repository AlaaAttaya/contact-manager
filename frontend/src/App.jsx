import React from "react";
import Card from "./Components/Card";
import contacts from "./contacts";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      image={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      {/* <div>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: 10 + "px", height: 10 + "px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div> */}
      <div>
        <h1 className="heading">Contacts</h1>
      </div>

      <div className="add-btn-div">
        <button className="add-btn">Add</button>
      </div>
      <div className="contacts-wrapper">
        {contacts.map(createCard)}

        {}
      </div>
    </div>
  );
}

export default App;
