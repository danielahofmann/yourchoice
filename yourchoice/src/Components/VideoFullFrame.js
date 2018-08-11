import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { X } from 'react-feather';
import VideoChoice from './VideoChoice';

class VideoFullFrame extends Component {

    constructor(props){
        super(props);
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
                <YouTube
                    videoId={this.props.videoId}
                    opts={opts}
                    onReady={this._onReady}
                    onEnd={this._onEnd}
                />
            </div>
        )
    }

    _onEnd(event) {
        if(this.props.section !== 2){

            // access to player in all event handlers via event.target
            document.querySelector('.hide').classList.remove('hide')
            console.log(event);
        }
    }
}

export default VideoFullFrame;
