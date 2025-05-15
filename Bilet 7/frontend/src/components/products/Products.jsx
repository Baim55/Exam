import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct, sortBy } from '../../redux/productSlice';
import Product from '../product/Product';
import "./Products.css"

const Products = () => {
    let { products } = useSelector((state) => state.products)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <section id="products-area">
            <div className="sort">
                <input type="text" onChange={(e) => dispatch(searchProduct(e.target.value))} />
                <button onClick={() => dispatch(sortBy("high"))}>SortByHigh</button>
                <button onClick={() => dispatch(sortBy("low"))}>SortByLow</button>
            </div>
            <div className="products">
                {
                    products && products.map((item) => <Product key={item._id} product={item} />)
                }
            </div>
        </section>
    )
}

export default Products