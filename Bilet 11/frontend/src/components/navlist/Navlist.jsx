import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navlist.css"

const Navlist = () => {
  return (
    <div>
        <ul className='list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/catalogue">Catalogue</Link></li>
            <li><Link to="/new">New Arrivals</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="burger">
            <RxHamburgerMenu />
        </div>
    </div>
  )
}

export default Navlist