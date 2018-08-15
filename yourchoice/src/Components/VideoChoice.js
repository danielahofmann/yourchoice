import React, { Component } from 'react';
import mp3 from '../audio/button.mp3';

class VideoChoice extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="VideoChoice hide">
                <audio src={mp3} autoload/>
                <div className="image-container">
                    <div className="choice-container" onClick={this.props.click} id="1">
                        <input type="image" src={this.props.firstImage} alt={this.props.firstButton} className="choice-button hover" />
                        <div className="overlay">
                            <p className="choice-text">{this.props.firstButton}</p>
                        </div>
                    </div>
                    <div className="choice-container right-container" onClick={this.props.click} id="2">
                        <input type="image" src={this.props.secondImage} alt={this.props.secondButton} className="choice-button hover" />
                        <div className="overlay">
                            <p className="choice-text">{this.props.secondButton}</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default VideoChoice;
