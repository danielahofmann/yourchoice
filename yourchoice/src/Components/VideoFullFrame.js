import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { X } from 'react-feather';
import VideoChoice from './VideoChoice';

class VideoFullFrame extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                autoplay: 1,
                hl: 'de'
            }
        };

        return (
            <div className="VideoFullFrame">
                <div className="VideoChoice hide">
                    <div className="buttons">
                        <button className="visionärButton button-orange" id='visionär'>Visionär</button>
                        <button className="pragmatikerButton button-orange" id='pragmatiker'>Pragmatiker</button>
                    </div>
                </div>
                <YouTube
                    videoId={props.videoId}
                    opts={opts}
                    onReady={this._onReady}
                    onEnd={this._onEnd}
                />
            </div>
        )
    }
     _onEnd(event) {
         // access to player in all event handlers via event.target
         document.querySelector('.hide').classList.remove('hide')
         console.log(event);

     }
}

export default VideoFullFrame;
