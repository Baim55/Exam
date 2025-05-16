import React from 'react'
import Hero from '../components/hero/Hero'
import Products from '../components/products/Products'
import Servic from '../components/servic/Servic'
import Brand from '../components/brand/Brand'
import Latest from '../components/latest/Latest'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Servic/>
      <Products/>
      <Brand/>
      <Latest/>
    </div>
  )
}

export default Home 