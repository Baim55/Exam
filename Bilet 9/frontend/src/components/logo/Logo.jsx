import React from "react";
import logoImg from "../../assets/images/logo.png.webp";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImg} alt="" />
    </div>
  );
};

export default Logo;
