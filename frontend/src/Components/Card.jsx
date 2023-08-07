import React, { useState, useRef } from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.image} />
      </div>
      <div className="bottom">
        <Details detailInfo={"Phone: " + props.tel} />
        <Details detailInfo={"Location: [" + props.address + "]"} />
      </div>
    </div>
  );
}

function CardAdd(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const imageInputRef = useRef();

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
    }
  };

  const handleAddContact = () => {
    const newContact = {
      name: name,
      phone_number: phoneNumber,
      address: location,
      image: image,
    };

    setName("");
    setPhoneNumber("");
    setLocation("");
    setImage(null);
  };

  return (
    <div className="card">
      <h1 className="heading-add">ADD</h1>
      <div className=" image-add">
        <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
          <Avatar image={image || "../../images/profilepic.png"} />
        </div>

        <input
          type="file"
          ref={imageInputRef}
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: "none", cursor: "pointer" }}
        />
        <div className="top">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ height: 20 }}
          />
        </div>
        <div className="bottom">
          <input
            type="tel"
            placeholder="Phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ height: 20 }}
          />
          <Details detailInfo={"Location: " + (location || "Location")} />
          <button
            onClick={handleAddContact}
            className="add-btn"
            style={{ width: 170 }}
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
export { CardAdd };
