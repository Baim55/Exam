import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from "react-icons/fa";
import "./Wrapper.css"
import { useSelector } from 'react-redux';

const Wrapper = () => {
  let {basket}=useSelector((state)=>state.basket)
  let basketCount=basket.reduce((sum,item)=>sum+item.count,0)
  return (
    <div className='wrapper'>
        <Link><FaHeart size={21}/></Link>
        <Link to="/basket"><FaShoppingBasket size={21}/></Link>
        <sup>{basketCount}</sup>
        <Link to="/admin"><button className='btn-admin'>Admin</button></Link>
    </div>
  )
}

export default Wrapper