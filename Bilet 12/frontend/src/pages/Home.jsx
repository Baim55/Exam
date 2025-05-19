import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Products from '../components/products/Products'
import Guest from '../components/guest/Guest'

const Home = () => {
  return (
    <div><Hero /><About /><Products /><Guest/></div>
  )
}

export default Home