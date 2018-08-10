import React from 'react';
import hipster from '../img/Vision Hipster_Standbild.png';
import pragmatiker from '../img/Vision Pragmatiker_Standbild.png';


const contentLeft = (props) => {
    return (
        <div className="content-card">
            <div className="content-text">
                <h2 className="headline2">Hipster oder Pragmatiker?</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="content-images">
                <div className="content-overlay">
                    <span className="image-overlay"></span>
                    <p className="video-button video-title">Pragmatiker</p>
                    <button className="video-button">Video abspielen</button>
                    <img src={pragmatiker} alt="pragmatiker" className="content-image"/>
                </div>
                <div className="content-overlay right-image">
                    <span className="image-overlay"></span>
                    <p className="video-button video-title">Visionär</p>
                    <button className="video-button">Video abspielen</button>
                    <img src={hipster} alt="Hipster" className="content-image"/>
                </div>
            </div>
        </div>
    )
};

export default contentLeft;