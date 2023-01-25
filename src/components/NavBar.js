import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <Link to={"/"}>Shop Bags</Link>
        </li>
        <li>
          <Link to={"/myCollection"}>My Collections</Link>
         
        </li>
        <li>
          <Link to={"/wishlist"}>Wishlist</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
