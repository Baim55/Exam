import React from "react";
import "./NewProduct.css";
import newimg1 from "../../assets/images/offer_1.jpg.webp";
import newimg2 from "../../assets/images/offer_2.jpg.webp";
import newimg3 from "../../assets/images/offer_3.jpg.webp";

const NewProduct = () => {
  return (
    <section id="new-area">
      <div className="container">
        <div className="row">
          <div className="new-title">
            <h2>News</h2>
            <div className="row new-desc">
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
          <div className="col-4">
            <div className="card">
              <div className="new-image">
                <img src={newimg1} alt="" />
              </div>
              <div className="new-price">
                <h5>We Have Dilecious</h5>
                <p className="new-desc">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="new-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="new-image">
                <img src={newimg2} alt="" />
              </div>
              <div className="new-price">
                <h5>Chef Special Menu</h5>
                <p className="new-desc">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="new-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="new-image">
                <img src={newimg3} alt="" />
              </div>
              <div className="new-price">
                <h5>Merriage Celebrations</h5>
                <p className="new-desc">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="new-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
