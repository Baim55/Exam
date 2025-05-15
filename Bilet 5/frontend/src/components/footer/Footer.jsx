import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer-area">
      <div className="container">
        <div className="footer-cards">
          <div className="footer-cards-left">
            <div className="footer-about">
              <h5>About us</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
                veritatis aliquam.
              </p>
            </div>
            <div className="footer-feat">
              <h5>Features</h5>
              <ul>
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Terms of Service</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="footer-cards-right">
            <div className="paragraph">
              <h5>Some paragraph</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat nostrum libero iusto dolorum vero atque aliquid.
              </p>
            </div>
            <div className="paragraph">
              <h5>Subscribe to Newsletter</h5>
              <input type="email" placeholder="Enter Email" />
              <button>Subscribe</button>
            </div>
            <div className="paragraph">
              <h5>Follow us</h5>
              <div className="footer-icons">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="colorlib">
          Copyright ©2025 All rights reserved | This template is made with
          <FaHeart className="heart"/> by Colorlib
        </p>
      </div>
    </section>
  );
};

export default Footer;
