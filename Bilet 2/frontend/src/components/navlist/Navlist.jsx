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
        <Link to="/products">Products</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About Us</Link>
      </li>
      <li className="list-item">
        <Link to="/special">Special</Link>
      </li>
      <li className="list-item">
        <Link to="/testimonials">Testimonials</Link>
      </li>
      <li className="list-item">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="list-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navlist;
