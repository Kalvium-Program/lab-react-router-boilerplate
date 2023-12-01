import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <Link to="/">
                    <h4>Kalvium</h4>
                </Link>
            </div>
            <div className='contact'>
                <Link to="/contact">
                    <h4>Contacts</h4>
                </Link>
                <Link to="/about">
                    <h4>About</h4>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
