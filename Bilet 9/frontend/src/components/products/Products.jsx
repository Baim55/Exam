import React, { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, sortBy } from "../../redux/productSlice";
import Product from "../product/Product";

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
          <h2>Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            perspiciatis!
          </p>
          <span>View All Products </span>
        </div>
        <div className="sort">
          <button onClick={()=>dispatch(sortBy("high"))}>SortByHigh</button>
          <button onClick={()=>dispatch(sortBy("low"))}>SortByLow</button>
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
