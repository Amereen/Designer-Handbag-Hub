import React, { useContext } from "react";
import { Collection } from "./CollectionContext";
import Card from "./Card";

const MyCollection = () => {
  const { myCollection, setMyCollection } = useContext(Collection);

  const removeItem = (id) => {
    const updatedCollection = myCollection.filter((item) => item.id !== id);
    setMyCollection(updatedCollection);
  };

  return (
    <div className="baglist-container">
      <div className="baglist-cards-con">
        {myCollection.map(({ id, price, name, description, image }) => {
          return (
            <Card
              key={id}
              price={price}
              name={name}
              description={description}
              imageUrl={image}
              handleClick={() => {
                removeItem(id);
              }}
              addBtn={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyCollection;
