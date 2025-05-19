import React from 'react'
import Navbar from '../navbar/Navbar'
import Navlist from '../navlist/Navlist'
import "./Header.css"

const Header = () => {
    return (
        <section id="header-area">
            <Navbar />
            <Navlist />
        </section>
    )
}

export default Header