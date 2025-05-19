import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Detail.css"

const Detail = () => {
  let { id } = useParams();
  let { products } = useSelector((state) => state.products);
  let product = products.find((item) => item._id == id);

  return (
    <div className="detail-area">
      <div className="container">
        <div className="row">
          <div className="col-5 detail-img">
            <img src={product.image} alt="" />
          </div>
          <div className="col-7 detail-title">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className="detail-btn">
              <button>Add Basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
