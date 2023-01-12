import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { Collection } from "./CollectionContext";

const BagList = () => {
  const [luxuryBags, setLuxuryBags] = useState([]);
  const [loading, setLoading] = useState(true);
}