import React from 'react'
import { useDispatch } from 'react-redux';
import { addBasket } from '../../redux/basketSlice';
import "./Product.css"
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {

    const dispatch = useDispatch()


    const handleAddBasket = (e) => {
        e.stopPropagation();
        dispatch(addBasket(product));
    };
    return (
        <div className="col-3">
            <div className="product-image">
                <img src={product.image} alt="" />
            </div>
            <div className="product-price">
                <h5>{product.title}</h5>
                <p className='price'>${product.price}</p>
                <p className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <button className="product-btn" onClick={handleAddBasket}>
                    Add Basket
                </button>
            </div>
        </div>
    )
}

export default Product