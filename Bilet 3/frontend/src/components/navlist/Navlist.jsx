import React from "react";
import { Link } from "react-router-dom";
import "./Navlist.css"

const Navlist = () => {
  return (
    <ul className="list">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About</Link>
      </li>
      <li className="list-item">
        <Link to="/offer">Offer</Link>
      </li>
      <li className="list-item">
        <Link to="/menu">Menu</Link>
      </li>
      <li className="list-item">
        <Link to="/news">News</Link>
      </li>
      <li className="list-item">
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="list-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navlist;
