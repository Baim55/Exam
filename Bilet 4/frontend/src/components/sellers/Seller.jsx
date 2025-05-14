import React from "react";
import "./Seller.css";
import seller1 from "../../assets/images/product_1.png (1).webp"
import seller2 from "../../assets/images/product_2.png.webp"
import seller3 from "../../assets/images/product_3.png.webp"
import seller4 from "../../assets/images/product_4.png.webp"
import seller5 from "../../assets/images/product_5.png.webp"
const Seller = () => {
  return (
    <section>
      <div className="container">
        <div className="row seller-title">
          <h1>Best Sellers</h1>
        </div>
        <div className="products">
          <div className="col-2 product-cards">
            <div className="product-card">
              <div className="product">
                <img src={seller1} alt="" />
                <div className="product-title">
                  <h6>Fujifilm X100T 16 MP Digital Camera (Silver)</h6>
                  <p>$520.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 product-cards">
            <div className="product-card">
              <div className="product">
                <img src={seller2} alt="" />
                <div className="product-title">
                  <h6>Samsung CF591 Series Curved 27-Inch FHD Moni...</h6>
                  <p>$610.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 product-cards">
            <div className="product-card">
              <div className="product">
                <img src={seller3} alt="" />
                <div className="product-title">
                  <h6>Blue Yeti USB Microphone Blackout Edition...</h6>
                  <p>$120.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 product-cards">
            <div className="product-card">
              <div className="product">
                <img src={seller4} alt="" />
                <div className="product-title">
                  <h6>DYMO LabelWriter 450 Turbo Thermal Label Pri...</h6>
                  <p>$410.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 product-cards">
            <div className="product-card">
              <div className="product">
                <img src={seller5} alt="" />
                <div className="product-title">
                  <h6>Pryma Headphones, Rose Gold & Grey...</h6>
                  <p>$180.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seller;
