import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Product from '../product/Product'
import { getProducts } from '../../redux/productSlice'

const Products = () => {
    let { products } = useSelector((state) => state.products)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

     console.log(products);
    return (
        <section id="products-area">
            <div>
                {products && 
                    products.map((item) => <Product key={item._id} product={item} />)}
            </div>
        </section>
    )
}

export default Products