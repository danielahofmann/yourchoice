import React, { Component } from 'react';

class VideoChoice extends Component {

    constructor(props){
        super(props);
    }

    // Here are Melon-Videos
    IdsVisionär = {
        video1: 'gKUhOGgG6Wk',
        video2: 'he-1cmJhD54',
        video3: 'PGHqgKKW_BE',
    }

    // Here are Pineapple-Videos
    IdsPragmatiker = {
        video1: '-zDnbfEHAL4',
        video2: 'AxKFaU32Ia4',
        video3: 'HsisZfKRWW4',
    }

    render() {
        return (
            <div className="VideoChoice hide">
                <button className="visionärButton button-orange" id='visionär'>{this.props.firstButton}</button>
                <button className="pragmatikerButton button-orange" id='pragmatiker'>{this.props.secondButton}</button>
            </div>
        );
    }
}

export default VideoChoice;
