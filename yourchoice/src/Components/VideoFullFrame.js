import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { X } from 'react-feather';
import VideoChoice from './VideoChoice';

class VideoFullFrame extends Component {

    constructor(props){
        super(props);
        this.state= {
            section: this.props.section,
        }
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
        console.log(this.state)
        if(this.state.section <= 1){
            // access to player in all event handlers via event.target
            document.querySelector('.hide').classList.remove('hide')
            console.log(event);
        } else {

        }
    }
}

export default VideoFullFrame;
