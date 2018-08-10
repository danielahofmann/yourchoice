import React from 'react';
import logo from '../img/logo.svg';
import menu from '../img/menu.svg';


const offcanvasNavigation = () => {
    return (
        <div>
            <img src={logo} alt="Logo" className="logo"/>
            <div className="menu">
                <img src={menu} alt="Menü" className=""/>
            </div>
        </div>
    )
};

export default offcanvasNavigation;