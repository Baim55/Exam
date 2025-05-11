import React, { useEffect } from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";

const DetailPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let { products } = useSelector((state) => state.products);
  let product = products.find((item) => item._id == id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <section id="detail-area">
      <div className="container">
        <div className="row detail">
          <div className="col-6">
            <div className="detail-image">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="detail-content">
              <h2 className="detail-title">{product.title}</h2>
              <p className="detail-description">{product.description}</p>
              <p className="detail-price">${product.price}0</p>
              <button className="detail-btn">Add Basket</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
