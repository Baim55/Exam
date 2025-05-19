import React from 'react'
import "./Product.css"
import { useDispatch } from "react-redux"
import { addBasket } from '../../redux/basketSlice'
import { useNavigate } from "react-router-dom"

const Product = ({ product }) => {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    return (
        <div className='product' onClick={() => navigate(`/detail/${product._id}`)}>
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>
            <div className="product-title">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <button onClick={() => dispatch(addBasket(product))}>Add Basket</button>
            </div>
            <div className="product-price">
                <p>${product.price}</p>
            </div>
        </div>
    )
}

export default Product