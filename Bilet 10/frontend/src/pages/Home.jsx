import React from "react";
import Hero from "../components/hero/Hero";
import Servic from "../components/servic/Servic";
import Products from "../components/products/Products";
import ContactUs from "../components/contact/ContactUs";
import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Servic/>
      <Products/>
      <ContactUs/>
      <Testimonial/>
    </div>
  );
};

export default Home;
