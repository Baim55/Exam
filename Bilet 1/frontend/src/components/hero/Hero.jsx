import React from "react";
import "./Hero.css";
import img from "../../assets/images/header-img.png.webp";

const Hero = () => {
  return (
    <section id="hero-area">
      <div className="row">
        <div className="hero">
          <div className="col-6 hero-image">
            <img src={img} alt="" />
          </div>
          <div className="col-6 hero-content">
            <h1 className="hero-span">
              <span>Flat</span> 75%Off
            </h1>
            <h1 className="hero-title">
              It’s Happening <br />
              this Season!
            </h1>
            <button>Purchase now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
