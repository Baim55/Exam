import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero-area">
      <div className="hero-img">
        <div className="container">
          <div className="hero-title">
            <span>Fresh Flower & Gift Shop</span>
            <h2>Making beautiful flowers a part of your life.</h2>
            <div className="hero-btn">
              <button>Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
