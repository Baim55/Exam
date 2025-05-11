import React from "react";
import "./Footer.css";
import imgi1 from "../../assets/images/i1.jpg.webp";
import imgi2 from "../../assets/images/i2.jpg.webp";
import imgi3 from "../../assets/images/i3.jpg.webp";
import imgi4 from "../../assets/images/i4.jpg.webp";
import imgi5 from "../../assets/images/i5.jpg.webp";
import imgi6 from "../../assets/images/i6.jpg.webp";
import imgi7 from "../../assets/images/i7.jpg.webp";
import imgi8 from "../../assets/images/i8.jpg.webp";
import { FaBehance, FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="footer-single">
              <h6>About us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="footer-single">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
            </div>
            <input type="email" placeholder="Enter Email" className="input"/>
          </div>
          <div className="col-3">
            <div className="footer-single">
              <h6>Instagram Feed</h6>
              <ul className="footer-list">
                <li>
                  <img src={imgi1} alt="" />
                </li>
                <li>
                  <img src={imgi2} alt="" />
                </li>
                <li>
                  <img src={imgi3} alt="" />
                </li>
                <li>
                  <img src={imgi4} alt="" />
                </li>
                <li>
                  <img src={imgi5} alt="" />
                </li>
                <li>
                  <img src={imgi6} alt="" />
                </li>
                <li>
                  <img src={imgi7} alt="" />
                </li>
                <li>
                  <img src={imgi8} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="footer-single">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div className="social">
                <FaFacebookF />
                <FaTwitter />
                <FaDribbble />
                <FaBehance />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="footer-temp">
            Copyright ©2025 All rights reserved | This template is made with
            <CiHeart className="heart" /> by <a href="">Colorlib</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
