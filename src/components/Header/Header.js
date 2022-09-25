import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/">Order Review</a></li>
                <li><a href="/">Manage Inventory</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;