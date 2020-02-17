import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <nav className='Navbar-nav'>
                <NavLink exact activeClassName='active-link' to="/">Home</NavLink>
                <NavLink activeClassName='active-link' to="/soda">Soda</NavLink>
                <NavLink activeClassName='active-link' to="/chips">Chips</NavLink>
                <NavLink activeClassName='active-link' to="/candy">Candy</NavLink>
            </nav>
        </div>
    )
}

export default Navbar
