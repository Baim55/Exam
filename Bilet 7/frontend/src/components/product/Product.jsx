import React from 'react'
import "./Product.css"
import { useDispatch } from 'react-redux'
import { addBasket } from '../../redux/basketSlice'
import { useNavigate } from "react-router-dom";


const Product = ({ product }) => {

    let dispatch = useDispatch()
   let navigate = useNavigate()

    const handleAddBasket = (e) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };

    return (
        <div className='product' onClick={()=>navigate(`/detail/${product._id}`)}>
            <img src={product.image} alt="" />
            <div className="product-title">
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
                <button onClick={handleAddBasket}>Add Basket</button>
            </div>
        </div>
    )
}

export default Product