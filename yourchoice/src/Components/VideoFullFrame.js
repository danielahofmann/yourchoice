import React, { Component } from 'react';
import YouTube from 'react-youtube';
import $ from "jquery";

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
                    onEnd={this.end}
                />
            </div>
        )
    }

    end = (e) => {
        console.log(this.props.section);

        if(this.props.section < 2){
            document.querySelector('.hide').classList.remove('hide');
            console.log(this.props.section);
            return;
        }
        if(this.props.section == 2){

            console.log(this.props.alreadyWatchedEndVideo)
            if (this.props.alreadyWatchedEndVideo == true){
                console.log('truee')
                $('.VideoFullFrame').delay(2000).fadeOut('slow');
            } else {
                this.props.endVideo();
            }
            return;
        }
        if(this.props.section == 3){
            console.log(this.props.section);
            $('.VideoFullFrame').delay(2000).fadeOut('slow');
            return;
        }
    };
}

export default VideoFullFrame;
