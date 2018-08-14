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
                    <div className="choice-container">
                        <input type="image" src={this.props.imageHip} alt="Visionär" id='1' onClick={this.props.click} className="choice-button hover" />
                        <div className="overlay">
                            <p className="choice-text">Visionär</p>
                        </div>
                    </div>
                    <div className="choice-container right-container">
                        <input type="image" src={this.props.imagePrag} alt="Pragmatiker" id='2' onClick={this.props.click}className="choice-button hover" />
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
