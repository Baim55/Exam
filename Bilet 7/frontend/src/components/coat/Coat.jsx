import React from "react";
import coatImg from "../../assets/images/model_5.png.webp"
import "./Coat.css"

const Coat = () => {
  return (
    <section id="coat-area">
      <div className="container">
        <div className="coat">
          <div className="coat-img">
            <img src={coatImg} alt="" />
          </div>
          <div className="coat-title">
            <p>#new summer collection 2019</p>
            <h1>New Denim Coat</h1>
            <button>Shop now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coat;
