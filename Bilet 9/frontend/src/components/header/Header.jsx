import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <section style={{padding:"20px 0"}}>
      <Logo />
      <Navbar />
    </section>
  );
};

export default Header;
