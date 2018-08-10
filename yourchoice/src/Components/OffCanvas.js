import React from 'react';
import image from '../img/offcanvas.png';
import menu from '../img/menu-offcanvas.svg';


const offcanvas = () => {
    return (
        <div className="offcanvas">
            <div className="relative">
                <div className="offcanvas-menu">
                    <img src={menu} alt="Menü" className=""/>
                </div>
                <img src={image} alt="It's your choice" className="offcanvas-image"/>
                <p>hekrjwier</p>
                <div className="offcanvas-nav">
                    <a href="https://www.google.de" className="offcanvas-link">die agentur.</a>
                    <a href="#section1" className="offcanvas-link">die storyline.</a>
                </div>
            </div>
        </div>
    )
};

export default offcanvas;