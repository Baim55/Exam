import React from "react";
import "./Footer.css";
import footerImg from "../../assets/images/logo.png.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer-area">
      <div className="container">
        <div className="footer-logo">
          <img src={footerImg} alt="" />
          <p>
            The floristry business has a significant market in the corporate and
            social event world, as flowers
          </p>
          <div className="social">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="footer">
          Copyright ©2025 All rights reserved | This template is made with
          <FaHeart className="heart" />
          by<a href="">Colorlib</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
