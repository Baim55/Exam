import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import "./Wrapper.css";
import { useSelector } from "react-redux";

const Wrapper = () => {
  let { basket } = useSelector((state) => state.basket);
  let basketCaunt = basket.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="wrapper">
      <Link>
        <FaHeart size={18} />
      </Link>
      <Link to="/basket">
        <FaShoppingBasket size={18} />
        <sup>{basketCaunt}</sup>
      </Link>
      <Link to="/admin">
        <button className="btn-admin">Admin</button>
      </Link>
    </div>
  );
};

export default Wrapper;
