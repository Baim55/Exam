import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBasket } from "../../redux/BasketSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBasket = (e) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };

  return (
    <div className="col-4">
      <div
        className="card"
        onClick={() => navigate(`/detailpage/${product._id}`)}
      >
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-price">
          <p className="price">${product.price}0</p>
          <h5>{product.title}</h5>
          <p className="product-desc">{product.description}</p>
          <button className="product-btn" onClick={handleAddBasket}>
            Add Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
