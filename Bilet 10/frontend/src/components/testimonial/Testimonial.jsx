import React from "react";
import "./Testimonial.css";
import testImg from "../../assets/images/quote.png.webp";

const Testimonial = () => {
  return (
    <div className="test-area">
      <div className="test-title">
        <img src={testImg} alt="" />
        <p>
          “I just wanted to say thank you for making such gorgeous arrangements
          for our birthday celebration. I couldn’t get over how perfect they
          were for the party. You did a fantastic job, and I appreciate it very
          much”
        </p>
        <h4>Alejandro Houston</h4>
        <span>Businessman</span>
      </div>
    </div>
  );
};

export default Testimonial;
