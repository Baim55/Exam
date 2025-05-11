import React from "react";
import "./MenProducts.css";
import img1 from "../../assets/images/l1.jpg.webp"
import img2 from "../../assets/images/l2.jpg.webp"
import img3 from "../../assets/images/l3.jpg.webp"
import img4 from "../../assets/images/l4.jpg.webp"

const MenProducts = () => {
  return (
    <section id="men-products">
      <div className="container">
        <div className="row">
          <div className="men-title">
          <h1>New realeased Products for Men</h1>
          <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="men-image">
              <img src={img1} alt="" />
            </div>
            <div className="men-price">
              <h5>Long Sleeve shirt</h5>
              <span>$150.00</span>
            </div>
          </div>
          <div className="col-3">
            <div className="men-image">
              <img src={img2} alt="" />
            </div>
            <div className="men-price">
              <h5>Long Sleeve shirt</h5>
              <span>$150.00</span>
            </div>
          </div>
          <div className="col-3">
            <div className="men-image">
              <img src={img3} alt="" />
            </div>
            <div className="men-price">
              <h5>Long Sleeve shirt</h5>
              <span>$150.00</span>
            </div>
          </div>
          <div className="col-3">
            <div className="men-image">
              <img src={img4} alt="" />
            </div>
            <div className="men-price">
              <h5>Long Sleeve shirt</h5>
              <span>$150.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenProducts;
