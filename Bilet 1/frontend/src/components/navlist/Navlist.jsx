import React from "react";
import { Link } from "react-router-dom";
import "./Navlist.css";

const Navlist = () => {
  return (
    <ul className="list">
      <li className="list_item">
        <Link to="/">Home</Link>
      </li>
      <li className="list_item">
        <Link to="/category">Category</Link>
      </li>
      <li className="list_item">
        <Link to="/men">Men</Link>
      </li>
      <li className="list_item">
        <Link to="/women">Women</Link>
      </li>
      <li className="list_item">
        <Link to="/latest">Latest</Link>
      </li>
      <li className="list_item">
        <Link to="/pages">Pages</Link>
      </li>
    </ul>
  );
};

export default Navlist;
