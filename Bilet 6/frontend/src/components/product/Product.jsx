import React from "react";
import "./Product.css"
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/basketSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  let dispatch=useDispatch()
  let navigate = useNavigate()

  const handleAddBasket = (e) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };
  return (
    <div className="product" onClick={()=>navigate(`/detail/${product._id}`)}>
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <p>${product.price}.00</p>
      <button onClick={handleAddBasket}>Add Basket</button>
    </div>
  );
};

export default Product;
