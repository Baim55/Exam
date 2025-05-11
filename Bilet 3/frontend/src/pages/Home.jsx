import React from 'react'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/aboutUs/AboutUs'
import Products from '../components/products/Products'
import NewProduct from '../components/newProduct/NewProduct'
import Gallery from '../components/gallery/Gallery'


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Products/>
      <NewProduct/>
      <Gallery/>
    </div>
  )
}

export default Home