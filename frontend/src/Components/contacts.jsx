import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { CardAdd } from "./Card";

const Contacts = () => {
  const [contactList, setContactList] = useState([]);
  const [showAddDivision, setShowAddDivision] = useState(false);

  const toggleAddDivision = () => {
    setShowAddDivision(!showAddDivision);
  };

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
    <div>
      <div className="contactlist-add">
        <h1>Contact List</h1>
        <div className="add-btn-div">
          <button className="add-btn" onClick={toggleAddDivision}>
            Add
          </button>
        </div>
      </div>

      <div className="cards-container">
        {showAddDivision && (
          <div className="add-division">
            <CardAdd />
          </div>
        )}
        {contactList.map((contact) => {
          const addressObject = JSON.parse(contact.address);
          const imageUrl = "http://127.0.0.1:8000" + contact.image;
          return (
            <Card
              key={contact.id}
              name={contact.name}
              image={imageUrl}
              tel={contact.phone_number}
              address={`${addressObject.latitude}, ${addressObject.longitude}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
