import React from 'react'

const Product = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
        </div>
    )
}

export default Product