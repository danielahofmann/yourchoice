import React from 'react';
import YouTube from 'react-youtube';
import { X } from 'react-feather';

class VideoModal extends React.Component {
    render() {
        const opts = {
            height: '50%',
            width: '50%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div className="youtube-modal">
                <button className="icon-button">
                    <X />
                </button>
                <YouTube
                    videoId="aFO9FhxrP5s"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default VideoModal;