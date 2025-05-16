import React from "react";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/basketSlice";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleAddBasket = (e) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };
  return (
    <div className="col-3">
      <div onClick={()=>navigate(`/detail/${product._id}`)}>
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-price">
          <h5>{product.title}</h5>
          <p className="price">${product.price}</p>
          <p className="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <button className="product-btn" onClick={handleAddBasket}>
            Add Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
