import React, { createContext, useState } from "react";
export const Collection = createContext();


const CollectionProvider = ({ children }) => {
  const [myCollection, setMyCollection] = useState([]);

  return (
    <Collection.Provider value={{ myCollection, setMyCollection }}>
      {children}
    </Collection.Provider>
  );
};

export default CollectionProvider;
