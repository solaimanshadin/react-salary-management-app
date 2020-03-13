import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/><h3>Salary Management App</h3>
        </div>
    );
};

export default Header;