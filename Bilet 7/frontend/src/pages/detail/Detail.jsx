import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../redux/productSlice'
import "./Detail.css"

const Detail = () => {
    let { id } = useParams()
    let dispatch = useDispatch()
    let { products } = useSelector((state) => state.products)
    let product = products.find((item) => item._id == id)
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="col-6 detail">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p className='price'>${product.price}</p>
                        <button>Add Basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail