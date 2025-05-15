import React from "react";
import "./Blog.css";
import blog1 from "../../assets/images/hero_1_no-text.jpg.webp";
import blog2 from "../../assets/images/hero_2_no-text.jpg.webp";

const Blog = () => {
  return (
    <section id="blog-area">
      <div className="container">
        <div className="leader-title">
          <h1>Our Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            ab possimus fugiat,
            <br /> autem aliquid, commodi quod voluptatum consectetur.
          </p>
        </div>
        <div className="blog-cards">
          <div className="blog-card">
            <img src={blog1} alt="" />
            <h2>How to Invest In Investing Company</h2>
            <p>
              <span>January 18, 2019 By</span><span className="name"> James Cooper</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              et suscipit iste libero neque. Vitae quidem ducimus voluptatibus
              nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa
              quis!
            </p>
          </div>
          <div className="blog-card">
            <img src={blog2} alt="" />
            <h2>How to Invest In Investing Company</h2>
            <p>
              <span>January 18, 2019 By</span><span className="name"> James Cooper</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              et suscipit iste libero neque. Vitae quidem ducimus voluptatibus
              nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa
              quis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
