import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import "./Wrapper.css"

const Wrapper = () => {
  return (
    <div className='wrapper'>
        <Link className='basket-link'><FaHeart size={23}/></Link>
        <Link to="basket" className='basket-link'><IoIosBasket size={23}/></Link>
        <Link to="admin" className='basket-link'><button className='btn-admin'>Admin</button></Link>
    </div>
  )
}

export default Wrapper