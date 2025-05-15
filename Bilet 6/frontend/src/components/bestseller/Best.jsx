import React from "react";
import best1 from "../../assets/images/product_1.png.webp"
import best2 from "../../assets/images/product_2.png.webp"
import best3 from "../../assets/images/product_3.png.webp"
import best4 from "../../assets/images/product_4.png.webp"

const Best = () => {
  return (
    <section id="products-area">
      <div className="container">
        <div className="products-title">
          <h2>Best Sellers</h2>
          <span>Shop</span>
          <p>Next | Previous</p>
        </div>
        <div className="products">
          <div className="product">
            <img src={best1} alt="" />
            <h4>Wooden Chairr</h4>
            <p>$120.00</p>
          </div>
          <div className="product">
            <img src={best2} alt="" />
            <h4>Office Chair</h4>
            <p>$195.00</p>
          </div>
          <div className="product">
            <img src={best3} alt="" />
            <h4>Plastic Chair</h4>
            <p>$140.00</p>
          </div>
          <div className="product">
            <img src={best4} alt="" />
            <h4>Minimal Chair</h4>
            <p>$85.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
