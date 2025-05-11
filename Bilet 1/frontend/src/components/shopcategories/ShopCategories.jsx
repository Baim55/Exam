import React from "react";
import img1 from "../../assets/images/c1.jpg.webp";
import img2 from "../../assets/images/c2.jpg.webp";
import img3 from "../../assets/images/c3.jpg.webp";
import img4 from "../../assets/images/c4.jpg.webp";
import "./ShopCategories.css"

const ShopCategories = () => {
  return (
    <section id="shop-area">
      <div className="container">
        <div className="row shop">
          <div className="shop-title">
            <h1>Shop for Different Categories</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <img src={img1} alt="" />
              </div>
              <div className="col-6">
                <img src={img2} alt="" />
              </div>
              <div className="col-12">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategories;
