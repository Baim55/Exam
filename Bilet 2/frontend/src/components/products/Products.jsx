import React, { useEffect } from "react";
import "./Products.css";
import Product from "../product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct, sortBy } from "../../redux/productSlice";

const Products = () => {
  let { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const sortByHigh=()=>{
    dispatch(sortBy("high"))
  }

  const sortByLow=()=>{
    dispatch(sortBy("low"))
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section id="product-area">
      <div className="container">
        <div className="row product">
          <div className="col-6">
            <div className="product-title">
              <h4>Popular products</h4>
              <h2>Our Products</h2>
              <div className="row product-desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae nostrum natus excepturi fuga ullam accusantium vel
                  ut eveniet aut consequatur laboriosam ipsam.
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
