import React, { Component } from 'react';

class VideoChoice extends Component {

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
                <button className="visionärButton button-orange" id='visionär'>Visionär</button>
                <button className="pragmatikerButton button-orange" id='pragmatiker'>Pragmatiker</button>
            </div>
        );
    }
}

export default VideoChoice;
