import React from 'react'

const Product = ({product}) => {
  return (
    <div className='col-2'>
        <div className="product">
          <img src={product.image} alt="" />
        </div>
    </div>
  )
}

export default Product 