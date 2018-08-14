import React from 'react';

const contentSingleRight = (props) => {
    return (
        <div className="content-card">
            <div className="content-images no-margin">
                <div className="content-overlay-single" data-video={props.idFirst} onClick={props.click}>
                    <span className="image-overlay"></span>
                    <p className="video-button video-title">{props.firstOption}</p>
                    <button className="video-button">Video abspielen</button>
                    <img src={props.imageFirst} alt={props.firstOption} className="content-image"/>
                </div>
            </div>
            <div className="content-text">
                <h2 className="headline2">{props.headline}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
};

export default contentSingleRight;