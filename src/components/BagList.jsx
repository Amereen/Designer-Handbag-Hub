import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { Collection } from "./CollectionContext";

const BagList = () => {
  const [luxuryBags, setLuxuryBags] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setMyCollection } = useContext(Collection);
  useEffect(() => {
    fetch("http://localhost:8000/bags")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(data);

        setLuxuryBags(data);
        setLoading(false);
      });
  }, []);
}