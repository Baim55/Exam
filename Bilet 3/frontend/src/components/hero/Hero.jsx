import React from "react";
import "./Hero.css";
import backgroundimg from "../../assets/images/bg_3.jpg.webp";

const Hero = () => {
  return (
    <section id="hero-area">
      <img src={backgroundimg} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-title">
              <h1>Welcome To EatWell</h1>
              <h2>Come and eat well with our delicious & healthy foods.</h2>
              <button>Reservation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
