import React from 'react'
import "./Products.css"
import { useSelector } from 'react-redux'
import Product from '../product/Product'

const Products = () => {

    let {products} = useSelector((state)=>state.products)

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col new">
                        <div className="new-title">
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="new-sort">
                            <button className='new-btn-active'>All</button>
                            <button>Women's</button>
                            <button>Accessiories's</button>
                            <button>Men's</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        products && products.map((item)=><Product key={item._id} product={item}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Products