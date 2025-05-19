import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../product/Product'
import { getProducts, sortBy } from '../../redux/productSlice'
import "./Products.css"

const Products = () => {

    let { products } = useSelector((state) => state.products)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <section id="products-area">
            <div className="container">
                <div className="products-area">
                    <h1>Featured Products</h1>
                </div>
                <div className="sort">
                    <button className='sort-btn' onClick={()=>dispatch(sortBy("high"))}>SoryByHigh</button>
                    <button className='sort-btn' onClick={()=>dispatch(sortBy("low"))}>SortByLow</button>
                </div>
                <div className="products-div">
                    <div className="products">
                        {
                            products && products.map((item) => <Product key={item._id} product={item} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products