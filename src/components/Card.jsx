import React from "react";

const Card = ({ name, price, imageUrl, description, handleClick, addBtn }) => {
  return (
    <div className="card">
      <div className="card-data">
        <p className="name">{name}</p>
        <p className="price">${price}</p>
      </div>
      <div className="card-img-container">
        <img src={imageUrl} alt="Bag" className="card-img" />
      </div>
      <p className="card-desc">{description}</p>
      <div className="card-btn-container">
        <button className="card-btn" onClick={handleClick}>
          {addBtn ? <>Add to collection</> : <>Remove from Collection</>}
        </button>
      </div>
    </div>
  );
};

export default Card;


