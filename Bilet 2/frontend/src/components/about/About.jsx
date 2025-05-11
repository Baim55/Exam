import React from "react";
import aboutimg from "../../assets/images/about_1.jpg.webp";
import "./About.css";

const About = () => {
  return (
    <section id="about-area">
      <div className="container">
        <div className="row about">
          <div className="col-8 about-img">
            <img src={aboutimg} alt="" />
            <div className="experience">
                <span className="year">Trusted Merchant</span>
                <span className="caption">For 50 years</span>
            </div>
          </div>
          <div className="col-4 about-us">
            <div className="about-title">
              <h4>Merchant Company</h4>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur
                eum inventore, rem maxime, nisi excepturi ipsam libero ratione
                adipisci alias eius vero vel!
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
