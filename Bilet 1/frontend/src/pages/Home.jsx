import React from "react";
import Hero from "../components/hero/Hero";
import ShopCategories from "../components/shopcategories/ShopCategories";
import MenProducts from "../components/menproducts/MenProducts";
import Products from "../components/products/Products";
import SearchProduct from "../components/searchproduct/SearchProduct";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCategories/>
      <MenProducts/>
      <Products/>
      <SearchProduct/>
    </div>
  );
};

export default Home;
