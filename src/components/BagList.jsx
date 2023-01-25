import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { Collection } from "./CollectionContext";

const BagList = () => {
  const [luxuryBags, setLuxuryBags] = useState([]);
  const [loading, setLoading] = useState(true);

  const { setMyCollection } = useContext(Collection);
  console.log(setMyCollection)
  useEffect(() => {
    fetch("http://localhost:6001/bags")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(data);

        setLuxuryBags(data);
        setLoading(false);
      });
  }, []);

  const addItem = (id, name, price, description, image) => {
    const item = {
      id,
      name,
      price,
      description,
      image,
    };

    setMyCollection((prvCollection) => {
      console.log(prvCollection)
      for (const myItem of prvCollection) {
        if (myItem.id === item.id) {
          return prvCollection;
        }
      }

      return [...prvCollection, item];
    });
  };

  if (loading) return <div>Loading...</div>;



  return (
    <div className="baglist-container">
      <div className="baglist-cards-con">
        {luxuryBags.map(({ id, price, name, description, image }) => {
          return (
            <Card
              key={id}
              price={price}
              name={name}
              description={description}
              imageUrl={image}
              handleClick={() => {
                addItem(id, name, price, description, image);
              }}
              addBtn={true}

            />
          );
        })}
      </div>
    </div>
  );
}

export default BagList;








