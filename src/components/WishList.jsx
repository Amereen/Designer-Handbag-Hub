import React, { useEffect, useState } from "react";

const WishList = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [data, setData] = useState({});

  useEffect(() => {
    const formData = {
      name,
      price,
      image,
      description,
    };

    setData(formData);
  }, [name, price, image, description]);

  return (
    <div className="wishlist-container">
      <h1>Add your own bag</h1>
      <form className="wishlist-container-form">
        <div>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            placeholder="Enter bag name"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter bag price"
            value={price}
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter bag image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter bag description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </form>
      <button
        onClick={async () => {
          const myBagData = await fetch("http://localhost:6001/bags", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const ourData = await myBagData.json();

          console.log(ourData);

          setName("");
          setPrice("");
          setImage("");
          setDescription("");
        }}
      >
        Add bag
      </button>
    </div>
  );
};

export default WishList;
