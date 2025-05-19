import React from "react";
import "./Servic.css";
import servic1 from "../../assets/images/benefit-1.png.webp";
import servic2 from "../../assets/images/benefit-2.png.webp";
import servic3 from "../../assets/images/benefit-3.png.webp";
import servic4 from "../../assets/images/benefit-4.png.webp";

const Servic = () => {
  return (
    <section id="servic">
      <div className="container">
        <div className="servic">
          <div className="services">
            <div className="servic-img">
              <img src={servic1} alt="" />
            </div>
            <div className="servic-title">
              <h3>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className="services">
            <div className="servic-img">
              <img src={servic2} alt="" />
            </div>
            <div className="servic-title">
              <h3>Made by artist</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className="services">
            <div className="servic-img">
              <img src={servic3} alt="" />
            </div>
            <div className="servic-title">
              <h3>Own courier</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className="services">
            <div className="servic-img">
              <img src={servic4} alt="" />
            </div>
            <div className="servic-title">
              <h3>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servic;
