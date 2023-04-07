import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/orders">Orders</Link>
        </nav>
    );
};

export default Header;