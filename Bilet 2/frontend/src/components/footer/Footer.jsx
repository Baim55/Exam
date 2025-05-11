import React from "react";
import "./Footer.css";
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import footerimg from "../../assets/images/product_1_bg.jpg.webp";

const Footer = () => {
  return (
    <section id="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-5">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque, similique, delectus blanditiis odit expedita amet. Sed
                  labore ipsum vel dolore, quis, culpa et magni autem sequi
                  facere eos tenetur, ex?
                </p>
              </div>
              <div className="col-3">
                <h2>Quick links</h2>
                <ul className="footer-list">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Testimonials</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-4">
                <h2>Follow us</h2>
                <ul className="footer-list">
                  <li>
                    <FaFacebookF className="footer-icon" />
                  </li>
                  <li>
                    <FaTwitter className="footer-icon" />
                  </li>
                  <li>
                    <FaInstagram className="footer-icon" />
                  </li>
                  <li>
                    <FaLinkedinIn className="footer-icon" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 shoe">
            <h2>Featured Product</h2>
            <img src={footerimg} alt="" style={{width:"260px"}}/>
            <h5>Leather Brown Shoe</h5>
            <p>$60.00</p>
            <button className="footer-btn">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="footer-temp">
          © Copyright ©2025 All rights reserved | This template is made with{" "}
          <FaHeart /> by Colorlib
        </p>
      </div>
    </section>
  );
};

export default Footer;
