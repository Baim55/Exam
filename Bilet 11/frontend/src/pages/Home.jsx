import React from 'react'
import Hero from '../components/hero/Hero'
import Servic from '../components/servic/Servic'
import Category from '../components/category/Category'
import Products from '../components/products/Products'
import Sale from '../components/sale/Sale'

const Home = () => {
  return (
    <div><Hero/><Servic/><Category/><Products/><Sale/></div>
  )
}

export default Home