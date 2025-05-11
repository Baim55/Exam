import React, { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct, sortBy } from "../../redux/ProductSlice";
import Product from "../product/Product";

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
            <h4>Our Offers</h4>
            <h2>Our Offer This Summer</h2>
            <div className="row product-desc">
              <div className="col-7">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
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
            <button onClick={sortByHigh}>HighToLow</button>
            <button onClick={sortByLow}>LowToHigh</button>
          </div>
          {products &&
            products.map((item) => <Product key={item._id} product={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
