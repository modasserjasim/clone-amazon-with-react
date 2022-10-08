import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/orders">Order Review</Link></li>
                <li><Link to="/inventory">Manage Inventory</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Header;