import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/basketSlice";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddBasket = (e) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };

  return (
    <div className="product" onClick={() => navigate(`/detail/${product._id}`)}>
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={handleAddBasket}>Add Basket</button>
    </div>
  );
};

export default Product;
