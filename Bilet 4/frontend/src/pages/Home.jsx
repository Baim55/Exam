import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import Products from '../components/products/Products'
import Seller from '../components/sellers/Seller'
import Latest from '../components/latest/Latest'
import Newsletter from '../components/newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <Products/>
      <Seller/>
      <Latest/>
      <Newsletter/>
    </div>
  )
}

export default Home 