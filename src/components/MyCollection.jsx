import React, { useContext } from "react";
import { Collection } from "./CollectionContext";
import Card from "./Card";


const MyCollection = () => {
  const { myCollection, setMyCollection } = useContext(Collection);

  const removeItem = (id) => {
    const updatedCollection = myCollection.filter((item) => item.id !== id);
    setMyCollection(updatedCollection);
  };
}  
