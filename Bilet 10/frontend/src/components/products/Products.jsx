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
    <section>
      <div className="container">
        <div className="products-title">
          <p>Our Flower</p>
          <h1>New Arrivals</h1>
          <div className="product-category">
            <span className="active">All</span>
            <span>Bouquet</span>
            <span>Flower box</span>
            <span>Flower shelf</span>
            <span>Basket of flower</span>
            <span>Gift combos</span>
          </div>
        </div>
        <div className="sort">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => dispatch(searchProduct(e.target.value))}
            />
          </div>
          <div className="sort-price">
            <button onClick={() => dispatch(sortBy("high"))}>SortByHigh</button>
            <button onClick={() => dispatch(sortBy("low"))}>SortByLow</button>
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
