import React, { useEffect } from "react";
import Product from "../product/Product";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct, sortBy } from "../../redux/ProductSlice";

const Products = () => {
  let { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const sortByHigh = () => {
    dispatch(sortBy("high"));
  };

  const sortByLow = () => {
    dispatch(sortBy("low"));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section id="product-area">
      <div className="container">
        <div className="row">
          <div className="product-title">
            <h1>New realeased Products for Women</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="sort">
            <input
              className="search"
              type="text"
              placeholder="Search"
              onChange={(e) => dispatch(searchProduct(e.target.value))}
            />
            <button onClick={sortByHigh}>HighToLow</button>
            <button onClick={sortByLow}>LowToHigh</button>
          </div>
        </div>
        <div className="row">
          {products &&
            products.map((item) => <Product key={item._id} product={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
