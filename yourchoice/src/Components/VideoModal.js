import React from 'react';
import YouTube from 'react-youtube';
import offcanvas from "./OffCanvas";

class VideoModal extends React.Component {
    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div className="youtube-modal">
                <YouTube
                    videoId="2g811Eo7K8U"
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