import React from 'react';
import YouTube from 'react-youtube';
import $ from 'jquery';
import { X } from 'react-feather';


class VideoModal extends React.Component {
    hideModal = () => {
        let modal = document.getElementsByClassName('youtube-modal')
        $(modal).fadeOut({queue: false, duration: 250});
        $(modal).css({opacity: '0'});
    };
    _onPlay = (event) => {
        console.log(document.getElementsByClassName('icon-button'));
        document.querySelector('.icon-button').onclick = () => {
            console.log('clicked');
            event.target.pauseVideo();
        }
    }

    _onEnd = () => {
        this.hideModal();
    };

    render() {
        const opts = {
            height: '50%',
            width: '50%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                hl: 'de'
            }
        };

        return (
            <div className="youtube-modal">
                <button className="icon-button" onClick={this.hideModal}>
                    <X />
                </button>
                <YouTube
                    videoId={this.props.videoId}
                    opts={opts}
                    onReady={this._onReady}
                    onEnd={this._onEnd}
                    onPlay={this._onPlay}
                />
            </div>
        );
    }
}

export default VideoModal;
