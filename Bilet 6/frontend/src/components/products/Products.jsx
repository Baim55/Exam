import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product/Product";
import { getProducts, searchProduct, sortBy } from "../../redux/productSlice";
import "./Products.css";

const Products = () => {
  let { products } = useSelector((state) => state.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section id="products-area">
      <div className="container">
        <div className="products-title">
          <h2>Awesome</h2>
          <span>Shop</span>
          <p>Next | Previous</p>
        </div>
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
        <div className="products">
          {products &&
            products.map((item) => <Product key={item._id} product={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
