import React from "react";
import "./Footer.css";
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              similique, delectus blanditiis odit expedita amet. Sed labore
              ipsum vel dolore, quis, culpa et magni autem sequi facere eos
              tenetur, ex?
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <h2>The restaurant</h2>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Chefs</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-2">
            <h2>Useful links</h2>
            <ul className="footer-list">
              <li>Foods</li>
              <li>Drinks</li>
              <li>Breakfast</li>
              <li>Brunch</li>
              <li>Dinner</li>
            </ul>
          </div>
          <div className="col-2">
            <h2>Useful links</h2>
            <ul className="footer-list">
              <li>Foods</li>
              <li>Drinks</li>
              <li>Breakfast</li>
              <li>Brunch</li>
              <li>Dinner</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="social">
              <div className="icon-circle">
                <FaTwitter className="footer-icon" />
              </div>
              <div className="icon-circle">
                <FaFacebookF className="footer-icon" />
              </div>
              <div className="icon-circle">
                <FaInstagram className="footer-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="footer-temp">
            © Copyright ©2025 All rights reserved | This template is made with{" "}
            <FaHeart className="heart" /> by <a href="">Colorlib</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
