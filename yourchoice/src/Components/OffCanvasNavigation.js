import React from 'react';
import $ from 'jquery';
import logo from '../img/logo.svg';
import menu from '../img/menu.svg';

function openOffcanvas() {
    let offcanvas = document.getElementsByClassName('offcanvas');
    $(offcanvas).fadeIn({queue: false, duration: 'slow'});
    $(offcanvas).animate({top: '0', opacity: '1'}, 350, function () {
        $(offcanvas).css({
            top: '0',
            opacity: '1',
        });
    });
}

const offcanvasNavigation = () => {
    return (
        <div>
            <img src={logo} alt="Logo" className="logo"/>
            <div className="menu" onClick={openOffcanvas}>
                <img src={menu} alt="Menü" className=""/>
            </div>
        </div>
    )
};

export default offcanvasNavigation;