import React from "react";
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
  return (
    <div className="card">
      <h1 className="heading-add">ADD</h1>

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

export default Card;
export { CardAdd };
