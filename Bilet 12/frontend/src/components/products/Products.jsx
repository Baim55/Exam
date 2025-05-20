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
          <p>OUR MENU</p>
          <h2>Discover Our Exclusive Menu</h2>
        </div>
        <div className="products-btn">
          <div className="pro-btn">
            <button className="active">Main</button>
            <button>Desert</button>
            <button>Drinks</button>
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

          <div className="sortby">
            <button onClick={() => dispatch(sortBy("high"))}>SortByHigh</button>
            <button onClick={() => dispatch(sortBy("low"))}>SortBylOW</button>
          </div>
        </div>
        <div className="products">
          {products &&
            products.map((item) => <Product key={item._id} product={item} />)}
        </div>
        <div className="reserv">
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost
          </p>
          <button>Make a Reservation</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
