import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/basketSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const handleBasket = (e) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };
  return (
    <div className="product" onClick={() => navigate(`/detail/${product._id}`)}>
      <img src={product.image} alt="" />
      <div className="product-title">
        <h5>{product.title}</h5>
        <p>${product.price}.00</p>
        <button onClick={handleBasket}>Add Basket</button>
      </div>
    </div>
  );
};

export default Product;
