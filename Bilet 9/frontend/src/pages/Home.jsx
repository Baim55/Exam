import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Welcome from "../components/welcome/Welcome";
import Person from "../components/person/Person";
import Blog from "../components/blog/Blog";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Welcome />
      <Person />
      <Blog/>
    </div>
  );
};

export default Home;
