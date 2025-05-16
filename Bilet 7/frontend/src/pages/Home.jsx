import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Collection from "./Collection";
import Collec from "../components/collection/Collec";
import Jacket from "../components/jacket/Jacket";
import Coat from "../components/coat/Coat";
const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Jacket />
      <Collec />
      <Coat/>
    </div>
  );
};

export default Home;
