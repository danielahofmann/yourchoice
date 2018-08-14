import React, { Component } from 'react';
import * as Icon from 'react-feather';
import hero from './img/Konferenz Einstieg_Standbild.png';
import './App.css';
import VideoChoice from './Components/VideoChoice';
import VideoFullFrame from './Components/VideoFullFrame';
import OffCanvas from './Components/OffCanvas';
import OffCanvasNavigation from './Components/OffCanvasNavigation';
import ContentLeft from './Components/ContentLeft';
import ContentSingleLeft from './Components/ContentSingleLeft';
import ContentSingleRight from './Components/ContentSingleRight';
import ContentRight from './Components/ContentRight';
import Footer from './Components/Footer';
import VideoModal from './Components/VideoModal';
import {SectionsContainer, Section} from 'react-fullpage';
import pragmatiker from './img/Vision Hipster_Standbild.png';
import hipster from './img/Vision Pragmatiker_Standbild.png';
import $ from "jquery";

let options = {
    sectionClassName:       'section',
    anchors:                ['hero', 'section1', 'section2', 'section3', 'footer'],
    scrollBar:              false,
    navigation:             true,
    verticalAlign:          false,
    sectionPaddingTop:      '50px',
    sectionPaddingBottom:   '0px',
    arrowNavigation:        false,
};

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalVideoId: '',
            videoOver: false,
            videoSection: 0,
            //variable with default-video-id for the beginning of the video
            currentVideoId:'3-VSd8EKI4Q',
            video: [
                {
                    //object with videos and options for the decision
                    videoOption1: 'Hipster',
                    firstVideoId: 'fxRSscFpcIg',
                    videoOption2: 'Pragmatiker',
                    secondVideoId: 'dXCcts7bJps'
                },
                {
                    //object with videos and options for the decision
                    videoOption1: 'Hipster',
                    firstVideoId: 'fxRSscFpcIg',
                    videoOption2: 'Pragmatiker',
                    secondVideoId: 'dXCcts7bJps'
                },
                {
                    //object with the link to the end of the video
                    endVideoId: 'gVMixn5ZzHs',
                    videoOption1: 'test',
                    videoOption2: 'test',
                },
                {
                    videoOption1: 'test',
                    videoOption2: 'test',
                }
            ]
        };
    }

    switchSection = (e) => {

        document.querySelector('audio').play();

        let counter = this.state.videoSection;
        let nextSection = counter + 1;
        if(typeof this.state.video[nextSection] != 'undefined') {
            if(e.currentTarget.id == 1){
                this.setState({
                    currentVideoId: this.state.video[counter].firstVideoId,
                    videoSection: nextSection
                });
            } else {
                this.setState({
                    currentVideoId: this.state.video[counter].secondVideoId,
                    videoSection: nextSection
                });
            }
        } else {
            console.log('Test');
            document.querySelector('.VideoFullFrame').classList.add('hide');
        }
        document.querySelector('.VideoChoice').classList.add('hide');
    };

    setEndVideo = () => {
        document.querySelector('.VideoChoice').remove();

        this.setState({
            currentVideoId: this.state.video[1].endVideoId,
            videoSection: 2
        });
    }

    setModalId = (e) => {
        console.log(e.currentTarget.dataset.video);
        let id = e.currentTarget.dataset.video;

        this.setState({
            modalVideoId: id
        });

        let modal = document.getElementsByClassName('youtube-modal');
        $(modal).fadeIn({queue: false, duration: 250});
        $(modal).css({opacity: '1'});

        console.log(this.state.modalVideoId);
    };

  render() {
    return (
        <div className="App">
            <VideoChoice
                firstButton={this.state.video[this.state.videoSection].videoOption1}
                secondButton={this.state.video[this.state.videoSection].videoOption2}
                click={this.switchSection}
                imagePrag={pragmatiker}
                imageHip={hipster}
            />
            <VideoFullFrame
                videoId={this.state.currentVideoId}
                section={this.state.videoSection}
                endVideo={this.setEndVideo}
                videoOver={this.state.videoOver}
            />
            <OffCanvas/>
            <VideoModal
                videoId={this.state.modalVideoId}
            />

            <header className="App-header">
                <OffCanvasNavigation/>
            </header>
            <main>
                <SectionsContainer className="container" {...options}>
                    <Section className="custom-section" verticalAlign="true">
                        <div className="relative">
                            <img src={hero} alt="hero" className="hero-image"/>
                            <h1 className="hero-headline">mehr als nur werbung.</h1>
                        </div>
                    </Section>
                    <Section>
                        <p className="background-number number-top-right">1</p>
                        <ContentSingleLeft
                            headline="Der Beginn"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet."
                            firstOption="Pragmatiker"
                            imageFirst={pragmatiker}
                            idFirst="3-VSd8EKI4Q"
                            click={this.setModalId}
                        />
                    </Section>
                    <Section>
                        <p className="background-number number-top-left">2</p>
                        <ContentRight
                            headline="something"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet."
                            firstOption="Pragmatiker"
                            imageFirst={pragmatiker}
                            scndOption="Visionär"
                            imageScnd={hipster}
                            idFirst="1q8djJuIcXo"
                            idScnd="qkgbbFHQ7Yo"
                            click={this.setModalId}
                        />
                    </Section>
                    <Section>
                        <p className="background-number number-bottom-right">3</p>
                        <ContentLeft
                            headline="Visionär oder Pragmatiker?"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet."
                            firstOption="Pragmatiker"
                            imageFirst={pragmatiker}
                            scndOption="Visionär"
                            imageScnd={hipster}
                            idFirst="1q8djJuIcXo"
                            idScnd="qkgbbFHQ7Yo"
                            click={this.setModalId}
                        />
                    </Section>
                    <Section>
                        <Footer />
                    </Section>

                </SectionsContainer>
            </main>
            <footer>

            </footer>
        </div>
    );
  }
}

export default App;
