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

    end = (e) => {
        console.log(this.props);
        if(this.props.section < 1){
            document.querySelector('.hide').classList.remove('hide')
            console.log(e);
        }
        if(this.props.section == 1){
            this.props.endVideo();
        }
        if(this.props.section == 2){
            document.querySelector('.VideoFullFrame').classList.add('hide');
        }
    };

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
                    onEnd={this.end}
                />
            </div>
        )
    }
}

export default VideoFullFrame;
