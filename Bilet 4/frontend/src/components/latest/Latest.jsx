import React from "react";
import latest1 from "../../assets/images/blog_1.jpg.webp";
import latest2 from "../../assets/images/blog_2.jpg.webp";
import latest3 from "../../assets/images/blog_3.jpg.webp";
import "./Latest.css"

const Latest = () => {
  return (
    <section id="latest-area">
      <div className="container">
        <div className="row seller-title">
          <h1>Latest Blogs</h1>
        </div>
        <div className="row" style={{marginTop:"30px"}}>
          <div className="col-4">
            <img src={latest1} alt="" />
          </div>
          <div className="col-4">
            <img src={latest2} alt="" />
          </div>
          <div className="col-4">
            <img src={latest3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
