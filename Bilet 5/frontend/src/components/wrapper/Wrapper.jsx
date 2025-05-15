import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Wrapper.css";

const Wrapper = () => {
  let { basket } = useSelector((state) => state.basket);
  let basketCount = basket.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="wrapper">
      <Link>
        <FaHeart size={18} />
      </Link>
      <Link to="/basket">
        <FaShoppingBasket size={18} />
        <sup>{basketCount}</sup>
      </Link>
      <Link to="/admin">
        <button className="btn-admin">Admin</button>
      </Link>
    </div>
  );
};

export default Wrapper;
