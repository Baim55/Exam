import React, { useEffect } from 'react'

import "./Products.css"
import { useDispatch, useSelector } from 'react-redux'
import Product from '../product/Product'
import { getProducts, searchProduct, sortBy } from '../../redux/productSlice'

const Products = () => {

  let { products } = useSelector((state) => state.products)

  const dispatch = useDispatch()

  const sortByHigh = () => {
    dispatch(sortBy("high"));
  };

  const sortByLow = () => {
    dispatch(sortBy("low"));
  };

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <section id="product-area">
      <div className="container">
        <div className="row our-products">
          <h1>Our Products</h1>
        </div>
        <div className="row ">
          <div className="col-12">
            <ul className='product-list'>
              <div className="feat">
                <li>Featured</li>
              </div>
              <div className="feat">
                <li>Bestseller</li>
              </div>
              <div className="feat">
                <li>Latest</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="row products">
          <div className="sort">
            <input
              className="search"
              type="text"
              placeholder="Search"
              onChange={(e) => dispatch(searchProduct(e.target.value))}
            />
            <button onClick={sortByHigh}>HighToLow</button>
            <button onClick={sortByLow}>LowToHigh</button>
          </div>
          {products && products.map((item) => <Product key={item._id} product={item} />)}
        </div>
      </div>
    </section>
  )
}

export default Products