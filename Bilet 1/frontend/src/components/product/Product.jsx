import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/BasketSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBasket=(e)=>{
    e.stopPropagation();
    dispatch(addBasket(product))
  }
  return (
    <div className="col-3">
      <div
        className="card"
        onClick={() => navigate(`/detailpage/${product._id}`)}
      >
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-price">
          <h5>{product.title}</h5>
          <p>${product.price}.00</p>
          <button
            className="product-btn"
            onClick={handleAddBasket}
          >
            Add Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
