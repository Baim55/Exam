import React from "react";
import "./AboutUs.css";
import aboutimg from "../../assets/images/about_img_1.jpg.webp"

const AboutUs = () => {
  return (
    <section id="about-area">
      <div className="container">
        <div className="row about">
          <div className="col-5">
            <div className="about-title">
              <h4>Our Story</h4>
              <h2>Welcome</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <button>Learn More About Us</button>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-6 about-img">
            <img src={aboutimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
