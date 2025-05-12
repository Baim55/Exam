import React from 'react'
import logoimg from "../../assets/images/dark.webp"
import "./Footer.css"
import footerimg from "../../assets/images/1-1920x465.webp"
import { FaHeart, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="footer-area">
      <img src={footerimg} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="footer-image">
              <img src={logoimg} alt="" className='logo' />
            </div>
            <p>Lorem ipsum dolor sit amet, consec adipisl elit, sed do eiusmod
              tempor incidio ut labore et dolore magna.
            </p>
            <div className="icons">
            <FaFacebookF  className='footer-icon'/>
            <FaTwitter className='footer-icon' />
            <FaPinterest  className='footer-icon'/>
            <FaDribbble className='footer-icon' />
            </div>
          </div>
          <div className="col-2">
            <h2 className='footer-title'>Useful Links</h2>
            <ul className='footer-list'>
              <li>About Pronia</li>
              <li>How to shop</li>
              <li>FAQ</li>
              <li>Contact us</li>
              <li>Log in</li>
            </ul>
          </div>
          <div className="col-2"><h2 className='footer-title'>My Account</h2>
            <ul className='footer-list'>
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help</li>
            </ul></div>
          <div className="col-2"><h2 className='footer-title'>Our Service</h2>
            <ul className='footer-list'>
              <li>Payment Methods</li>
              <li>Money Guarantee!</li>
              <li>Returns</li>
              <li> Shipping</li>
              <li>Privacy Policy</li>
            </ul></div>
          <div className="col-2"><h2 className='footer-title'>Got Question? Call Us</h2>
            <ul className='footer-list'>
              <li>123 456 789</li>
              <li>How to shop</li>
              <li>Your Address Goes Here</li>
            </ul></div>
        </div>
        <div className="row">
          <h6 style={{ textAlign: "center", marginTop: "40px", color: "#8dba87" }}>© 2021 Pronia Made With <FaHeart style={{ color: "red" }} /> By HasThemes</h6>
        </div>
      </div>
    </section>
  )
}

export default Footer