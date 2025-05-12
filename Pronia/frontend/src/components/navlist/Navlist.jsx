import React from "react";
import { Link } from "react-router-dom";
import "./Navlist.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navlist = () => {
  return (
    <div className="nav-list">
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="burger">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navlist;
