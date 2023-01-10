import React from "react";

const Card = ({ name, price, imageUrl, description, handleClick, addBtn }) => {
  return (
    <div className="card">
      <div className="card-data">
        {/* <p className="name">{name}</p>
        <p className="price">${price}</p> */}
      </div>
    </div>
  );
};

export default Card;


