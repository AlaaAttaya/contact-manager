import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contacts from "./Components/contacts";
import MapPage from "./Pages/MapPage";

function App() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/contacts");
        setContactList(response.data.contacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className="headers-container">
          <Link to="" className="links">
            <h1 className="heading">Contacts</h1>
          </Link>
          <Link to="/map" className="links">
            <h1 className="heading">Map</h1>
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="contacts-wrapper">
                  <Contacts contacts={contactList} />
                </div>
              </div>
            }
          />
          <Route path="/map" element={<MapPage contacts={contactList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
