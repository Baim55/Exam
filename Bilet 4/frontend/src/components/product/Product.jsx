import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBasket } from "../../redux/basketSlice";

const Product = ({ product }) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleAddBasket = (e) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };
  return (
    <div className="col-2 product-cards">
      <div
        className="product-card"
        onClick={() => navigate(`/detail/${product._id}`)}
      >
        <div className="product">
          <img src={product.image} alt="" />
          <div className="product-title">
            <h6>{product.title.slice(0,44)+"..."}</h6>
            <p>${product.price}.00</p>
            <button onClick={handleAddBasket}>Add Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
