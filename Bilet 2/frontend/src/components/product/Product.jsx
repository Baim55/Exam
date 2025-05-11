import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBasket } from "../../redux/basketSlice";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBasket = (e) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };
  return (
    <div className="col-4 cards">
      <div
        className="card"
        onClick={() => navigate(`/detailpage/${product._id}`)}
      >
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-price">
          <h5>{product.title}</h5>
          <div className="icons">
            <span>
              <FaStar className="star" />
              {product.rating}
            </span>
            <span>
              <FaHeart className="heart" />
              {product.like}
            </span>
          </div>
          <p className="price">${product.price}</p>
          <p className="product-desc">{product.description}</p>
          <button className="basket-btn" onClick={handleAddBasket}>Add Basket</button>
          <button className="view-btn">View</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
