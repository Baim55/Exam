import React from 'react'
import Logo from '../logo/Logo'
import Wrapper from '../wrapper/Wrapper'
import Search from '../search/Search'

const Navbar = () => {
    return (
        <div className='navbar container'>
            <Search />
            <Logo />
            <Wrapper />
        </div>
    )
}

export default Navbar