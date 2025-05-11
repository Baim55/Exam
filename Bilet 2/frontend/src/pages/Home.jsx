import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import About from "../components/about/About";
import Team from "../components/team/Team";
import Services from "../components/ourservices/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products/>
      <About/>
      <Team/>
      <Services/>
    </div>
  );
};

export default Home;
