import React from 'react';
import $ from 'jquery';
import image from '../img/offcanvas.png';
import menu from '../img/menu-offcanvas.svg';

function closeOffcanvas() {
    let offcanvas = document.getElementsByClassName('offcanvas');
    $(offcanvas).fadeOut({queue: false, duration: 'slow'});
    $(offcanvas).animate({top: '-100%', opacity: '0'}, 350,function () {
         $(offcanvas).css({
             top: '-100%',
             opacity: '0',
         });
     });
}

const offcanvas = () => {
    return (
        <div className="offcanvas">
            <div className="relative">
                <div className="offcanvas-menu" onClick={closeOffcanvas}>
                    <img src={menu} alt="Menü" className=""/>
                </div>
                <img src={image} alt="It's your choice" className="offcanvas-image"/>
                <div className="offcanvas-nav">
                    <a href="https://www.google.de" className="offcanvas-link">die agentur.</a>
                    <a href="#section1" className="offcanvas-link" onClick={closeOffcanvas}>die storyline.</a>
                </div>
            </div>
        </div>
    )
};

export default offcanvas;