import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import "./Wrapper.css";
import { useSelector } from "react-redux";

const Wrapper = () => {
  let { basket } = useSelector((state) => state.basket);
  let basketCount = basket.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="wrapper">
      <Link>
        <FaHeart size={21} />
      </Link>
      <Link to="/basket">
        <FaBasketShopping size={21} />
        <sup>{basketCount}</sup>
      </Link>
      <Link to="/admin">
        <button className="admin-btn">Admin</button>
      </Link>
    </div>
  );
};

export default Wrapper;
