import React from 'react';

const contentLeft = (props) => {
    return (
        <div className="content-card">
            <div className="content-text">
                <h2 className="headline2">{props.headline}</h2>
                <p>{props.description}</p>
            </div>
            <div className="content-images">
                <div className="content-overlay" data-video={props.idFirst} onClick={props.click}>
                    <span className="image-overlay"></span>
                    <p className="video-button video-title">{props.firstOption}</p>
                    <button className="video-button">Video abspielen</button>
                    <img src={props.imageFirst} alt={props.firstOption} className="content-image"/>
                </div>
                <div className="content-overlay right-image" data-video={props.idScnd} onClick={props.click}>
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