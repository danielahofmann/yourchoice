import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { X } from 'react-feather';

class VideoFullFrame extends Component {
    state = {
        currentVideoId: ''
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
                    videoId="61yrZiWPXsQ"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
}

export default VideoFullFrame;
