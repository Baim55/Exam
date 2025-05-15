import React from "react";
import "./Hero.css";
import heroImg from "../../assets/images/banner_img.png.webp";

const Hero = () => {
  return (
    <section id="hero-area">
      <div className="container">
        <div className="hero">
          <div className="hero-title">
            <h1>Wood & Cloth Sofa</h1>
            <p>
              Incididunt ut labore et dolore magna aliqua quis ipsum suspendisse
              ultrices gravida. Risus commodo viverra
            </p>
            <button>Buy now</button>
          </div>
          <div className="hero-img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
