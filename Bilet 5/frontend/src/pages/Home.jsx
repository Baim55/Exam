import React from "react";
import Hero from "../components/hero/Hero";
import Servic from "../components/servic/Servic";
import Products from "../components/products/Products";
import Leader from "../components/leader/Leader";
import Blog from "../components/blog/Blog";

const Home = () => {
  return (
    <div>
      <Hero />
      <Servic />
      <Products />
      <Leader />
      <Blog/>
    </div>
  );
};

export default Home;
