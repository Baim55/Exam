import React from "react";
import "./Blog.css";
import blog1 from "../../assets/images/img_1.jpg.webp";
import blog2 from "../../assets/images/hero_2.jpg.webp";
import blog3 from "../../assets/images/img_3.jpg.webp";

const Blog = () => {
  return (
    <section id="blog-area">
      <div className="container">
        <div className="blog-product">
          <h2>Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            perspiciatis!
          </p>
          <span>View All Products </span>
        </div>
        <div className="blogs">
          <div className="blog">
            <img src={blog1} alt="" />
            <div className="blog-title">
              <h5>What You Need To Know About Premium Rosecco</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <p className="blog-name">Dave Rogers <span>in</span> News</p>
            </div>
          </div>
          <div className="blog">
            <img src={blog2} alt="" />
            <div className="blog-title">
              <h5>What You Need To Know About Premium Rosecco</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <p className="blog-name">Dave Rogers <span>in</span> News</p>
            </div>
          </div>
          <div className="blog">
            <img src={blog3} alt="" />
            <div className="blog-title">
              <h5>What You Need To Know About Premium Rosecco</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <p className="blog-name">Dave Rogers <span>in</span> News</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
