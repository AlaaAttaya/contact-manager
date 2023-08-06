import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Components/Card";

const Contacts = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/contacts");
        setContactList(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <div className="cards-container">
        {contactList.map((contact) => (
          <Card
            key={contact.id}
            name={contact.name}
            image={contact.image}
            tel={contact.phone_number}
            address={contact.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
