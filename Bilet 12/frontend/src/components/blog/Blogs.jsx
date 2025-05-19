import React from "react";
import "./Blogs.css";
import blog1 from "../../assets/images/image_5.jpg.webp";
import blog2 from "../../assets/images/image_6.jpg.webp";
import blog3 from "../../assets/images/image_7.jpg.webp";

const Blogs = () => {
  return (
    <section id="blog-area">
      <div className="container">
        <div className="blogs-title">
          <p>Blog</p>
          <h2>Recent Blog</h2>
        </div>
        <div className="blogs">
          <div className="blog">
            <div className="blog-img">
              <img src={blog1} alt="" />
            </div>
            <div className="blog-title">
              <p>July 7,2018 Admin</p>
              <h5>
                Even the all-powerful Pointing has no control about the blind
                texts
              </h5>
              <span>Read more</span>
            </div>
          </div>
          <div className="blog">
            <div className="blog-img">
              <img src={blog2} alt="" />
            </div>
            <div className="blog-title">
              <p>July 7,2018 Admin</p>
              <h5>
                Even the all-powerful Pointing has no control about the blind
                texts
              </h5>
              <span>Read more</span>
            </div>
          </div>
          <div className="blog">
            <div className="blog-img">
              <img src={blog3} alt="" />
            </div>
            <div className="blog-title">
              <p>July 7,2018 Admin</p>
              <h5>
                Even the all-powerful Pointing has no control about the blind
                texts
              </h5>
              <span>Read more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
