import React, { Component } from 'react';
import mp3 from '../audio/button.mp3';

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
                <audio src={mp3} autoload/>
                <div className="image-container">
                    <div className="choice-container" onClick={this.props.click} id="1">
                        <input type="image" src={this.props.imageHip} alt="Visionär" className="choice-button hover" />
                        <div className="overlay">
                            <p className="choice-text">Visionär</p>
                        </div>
                    </div>
                    <div className="choice-container right-container" onClick={this.props.click} id="2">
                        <input type="image" src={this.props.imagePrag} alt="Pragmatiker" className="choice-button hover" />
                        <div className="overlay">
                            <p className="choice-text">Pragmatiker</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default VideoChoice;
