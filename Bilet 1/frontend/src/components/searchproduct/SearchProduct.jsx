import React from "react";
import "./SearchProduct.css";
import { IoPricetagOutline } from "react-icons/io5";
import imgr1 from "../../assets/images/r1.jpg.webp";
import imgr2 from "../../assets/images/r2.jpg.webp";
import imgr3 from "../../assets/images/r3.jpg.webp";
import imgr4 from "../../assets/images/r4.jpg.webp";
import imgr5 from "../../assets/images/r5.jpg.webp";
import imgr6 from "../../assets/images/r6.jpg.webp";
import imgr7 from "../../assets/images/r7.jpg.webp";
import imgr8 from "../../assets/images/r8.jpg.webp";
import imgr9 from "../../assets/images/r9.jpg.webp";
import imgr10 from "../../assets/images/r10.jpg.webp";
import imgr11 from "../../assets/images/r11.jpg.webp";
import imgr12 from "../../assets/images/r12.jpg.webp";

const SearchProduct = () => {
  return (
    <section id="search-products">
      <div className="container">
        <div className="row">
          <div className="search-product">
            <h1>Related Searched Products</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="single">
              <img src={imgr1} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr2} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr3} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr4} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr5} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr6} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr7} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr8} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr9} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr10} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr11} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="single">
              <img src={imgr12} alt="" />
              <div className="desc">
                <p>Black lace Heels</p>
                <span>
                  <IoPricetagOutline /> $189.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchProduct;
