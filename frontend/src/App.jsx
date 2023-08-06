import React from "react";
import Contacts from "./contacts";

function App() {
  return (
    <div>
      <div>
        <h1 className="heading">Contacts</h1>
      </div>
      <div className="add-btn-div">
        <button className="add-btn">Add</button>
      </div>
      <div className="contacts-wrapper">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
