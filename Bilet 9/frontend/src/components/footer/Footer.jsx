import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="social">
        <div className="social-circle">
          <FaFacebookF className="social-icon" />
        </div>
        <div className="social-circle">
          <FaTwitter className="social-icon" />
        </div>
        <div className="social-circle">
          <TfiYoutube className="social-icon" />
        </div>
        <div className="social-circle">
          <FaInstagram className="social-icon" />
        </div>
      </div>
      <div className="colorlib">
        <p>
          Copyright ©2025 All rights reserved | This template is made with <FaHeart className="heart"/> by
          <a href=""> Colorlib</a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
