import React from 'react';
import hipster from '../img/Vision Hipster_Standbild.png';
import pragmatiker from '../img/Vision Pragmatiker_Standbild.png';


const contentLeft = (props) => {
    return (
        <div className="content-card">
            <div className="content-text">
                <h2 className="headline2">{props.headline}</h2>
                <p>{props.description}</p>
            </div>
            <div className="content-images">
                <div className="content-overlay">
                    <span className="image-overlay"></span>
                    <p className="video-button video-title">{props.firstOption}</p>
                    <button className="video-button">Video abspielen</button>
                    <img src={props.imageFirst} alt={props.firstOption} className="content-image"/>
                </div>
                <div className="content-overlay right-image">
                    <span className="image-overlay"></span>
                    <p className="video-button video-title">{props.scndOption}</p>
                    <button className="video-button">Video abspielen</button>
                    <img src={props.imageScnd} alt={props.scndOption} className="content-image"/>
                </div>
            </div>
        </div>
    )
};

export default contentLeft;