import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import "./Wrapper.css";
import { useSelector } from "react-redux";

const Wrapper = () => {
  let { basket } = useSelector((state) => state.basket);
  let basketCount = basket.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="wrapper">
      <Link className="basket-link">
        <FaHeart size={23} />
      </Link>
      <Link to="basket" className="basket-link">
        <IoIosBasket size={23} />
        <sup>{basketCount}</sup>
      </Link>
      <Link to="admin" className="basket-link">
        <button className="btn-admin">Admin</button>
      </Link>
    </div>
  );
};

export default Wrapper;
