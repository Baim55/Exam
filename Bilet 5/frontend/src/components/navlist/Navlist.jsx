import React from 'react'
import { Link } from 'react-router-dom'
import "./Navlist.css"
import { RxHamburgerMenu } from "react-icons/rx";

const Navlist = () => {
  return (
    <div>
      <ul className='list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="burger">
        <RxHamburgerMenu />
      </div>
    </div>
  )
}

export default Navlist 