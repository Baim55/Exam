import React, { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product/Product";
import { getProducts, searchProduct, sortBy } from "../../redux/productSlice";

const Products = () => {
  let { products } = useSelector((state) => state.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section id="products-area">
      <div className="container">
        <div className="row">
          <div className="new">
            <div className="new-title">
              <h2>New Arrivals</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="new-sort">
              <button className="new-btn-active">All</button>
              <button className="new-btn">Women's</button>
              <button className="new-btn">Accessiories's</button>
              <button className="new-btn">Men's</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="sort">
            <input
              className="search"
              type="text"
              placeholder="Search"
              onChange={(e) => dispatch(searchProduct(e.target.value))}
            />
            <button onClick={() => dispatch(sortBy("high"))}>HighToLow</button>
            <button onClick={() => dispatch(sortBy("low"))}>LowToHigh</button>
          </div>
        </div>
        <div className="products">
          {products &&
            products.map((item) => <Product key={item._id} product={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
