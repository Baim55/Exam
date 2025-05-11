import React from "react";
import "./Hero.css";
import backimg from "../../assets/images/hero_2.jpg.webp";

const Hero = () => {
  return (
    <section id="hero-area">
      <img src={backimg} alt="" className="hero-bg" />
      <div className="container">
        <div className="row hero">
          <div className="col-6">
            <div className="hero-title">
              <h1>Shop With Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                officia.
              </p>
              <div className="hero-btn">
                <button className="shop-btn">Shop now</button>
                <button className="club-btn">Club Memmbership</button>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
