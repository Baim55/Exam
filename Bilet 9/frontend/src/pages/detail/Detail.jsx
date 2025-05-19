import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../redux/productSlice";
import "./Detail.css";

const Detail = () => {
  let { id } = useParams();
  let { products } = useSelector((state) => state.products);
  let product = products.find((item) => item._id == id);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div className="detail">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="detail-img">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="col-7">
            <div className="detail-title">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className="price">${product.price}.00</p>
              <div className="detail-btn">
                <button>Add Basket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
