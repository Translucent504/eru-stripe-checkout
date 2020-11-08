import { Link } from 'gatsby'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to="/"> Product List</Link>
            <Link to="/product-from-session"> Product From Serverless Backend</Link>
        </nav>
    )
}

export default Navbar
