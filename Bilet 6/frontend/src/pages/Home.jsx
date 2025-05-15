import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Best from "../components/bestseller/Best";
import Subscribe from "../components/subscribe/Subscribe";
import ClientLogo from "../components/clientlogo/ClientLogo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Best />
      <Subscribe />
      <ClientLogo/>
    </div>
  );
};

export default Home;
