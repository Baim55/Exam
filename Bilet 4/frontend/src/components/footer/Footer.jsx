import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <section id="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-6 lists">
            <ul className="footer-list">
              <li>Blog</li>
              <li>FAQs</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-6 footer-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaSkype />
          </div>
        </div>
        <div className="row" style={{ marginTop: "60px" }}>
          <p>
            ©2018 All Rights Reserverd. This template is made with{" "}
            <CiHeart className="heart" /> by{" "}
            <a href="" className="colorlib">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
