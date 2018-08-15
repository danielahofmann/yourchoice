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
import end from './img/Konferenz Ausstieg_Standbild.png';
import intro from './img/Konferenz Einstieg_Standbild.png';
import $ from "jquery";

let options = {
    sectionClassName:       'section',
    anchors:                ['hero', 'anfang', 'pragmatiker', 'hipster', 'ende', 'footer'],
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
            firstImage: hipster,
            secondImage: pragmatiker,
            videoOver: false,
            videoSection: 0,
            //variable with default-video-id for the beginning of the video
            currentVideoId:'3-VSd8EKI4Q',
            endVideo: false,
            video: [
                {
                    //object with videos and options for the decision
                    videoOption1: 'Hipster',
                    firstVideoId: 'fxRSscFpcIg',
                    firstImage: {hipster},
                    videoOption2: 'Pragmatiker',
                    secondVideoId: 'dXCcts7bJps',
                    firstImage: {pragmatiker},
                },
                {
                    //object with videos and options for the decision
                    videoOption1: '',
                    firstVideoId: '',
                    videoOption2: 'Ende',
                    secondVideoId: 'gVMixn5ZzHs'
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
        let videoId = '';
        let firstImage = '';
        let secondImage = '';

        if(typeof this.state.video[nextSection] != 'undefined') {
            if(this.state.videoSection == 0) {
                let videoCopy = this.state.video;

                if (e.currentTarget.id == 1) {
                    //we clicked on hipster so we may want to watch pragmatiker also
                    videoCopy[nextSection].videoOption1 = 'Pragmatiker';
                    videoCopy[nextSection].firstVideoId = 'ogBbANEot9A';
                    videoId = this.state.video[counter].firstVideoId;
                    firstImage = pragmatiker;
                    secondImage = end;
                }

                if (e.currentTarget.id == 2) {
                    //we clicked on prag so we may want to watch hipster also
                    videoCopy[nextSection].videoOption1 = 'Hipster';
                    videoCopy[nextSection].firstVideoId = 'yaDVVjTKUfM';
                    videoId = this.state.video[counter].secondVideoId;
                    firstImage = hipster;
                    secondImage = end;
                }

                console.log(this.state.video[nextSection]);

                //saving all the data in state
                this.setState({
                    currentVideoId: videoId,
                    videoSection: nextSection,
                    video: videoCopy,
                    firstImage: firstImage,
                    secondImage: secondImage
                });
            }

            if(this.state.videoSection == 1) {
                let videoCopy = this.state.video;

                //id 1 means to watch again hipster or pragmatiker then next section will be the end of the video
                if (e.currentTarget.id == 1) {
                    this.setState({
                        currentVideoId: this.state.video[counter].firstVideoId,
                        videoSection: nextSection,
                    });
                } else {
                    //this means, we're already watching the end, so we doesn't need another end.

                    this.setState({
                        currentVideoId: this.state.video[counter].secondVideoId,
                        videoSection: nextSection,
                        endVideo: true,
                    });
                }
            }
        } else {
            document.querySelector('.VideoFullFrame').classList.add('hide');
        }
        document.querySelector('.VideoChoice').classList.add('hide');
    };

    setEndVideo = () => {
        //document.querySelector('.VideoChoice').remove();
        let counter = this.state.videoSection;
        let nextSection = counter + 1;

        this.setState({
            currentVideoId: this.state.video[2].endVideoId,
            videoSection: nextSection,
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
                firstImage={this.state.firstImage}
                secondImage={this.state.secondImage}
            />
            <VideoFullFrame
                videoId={this.state.currentVideoId}
                section={this.state.videoSection}
                endVideo={this.setEndVideo}
                videoOver={this.state.videoOver}
                alreadyWatchedEndVideo={this.state.endVideo}
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
                            headline="Der Anfang"
                            description="Großes Kino, epische Sounds oder doch lieber auf das Wesentliche konzentrieren?
                            Jede Videoproduktion beginnt mit einer Idee. Dank mehrjähriger Erfahrung im Bereich Online
                            Publishing und unserer Faszination für tolle Bilder, erstellen wir audiovisuellen Content auf
                            höchstem Niveau. Agenturarbeit und Contentcreations - Alles aus einer Hand."
                            firstOption="Der Einstieg"
                            imageFirst={intro}
                            idFirst="3-VSd8EKI4Q"
                            click={this.setModalId}
                        />
                    </Section>
                    <Section>
                        <p className="background-number number-top-left">2</p>
                        <ContentSingleRight
                            headline="Der Pragmatiker"
                            description="Ein Imagefilm ist die perfekte Mischung aus Werbespot und Reportage. Er porträtiert
                            nicht nur ein Unternehmen, eine Marke oder ein Produkt, sondern schafft dies auf besonders
                            authentische, spannende und inspirierende Weise. Ziel ist es dabei, dem Zuschauer lange im
                            Gedächtnis zu bleiben, vielleicht sogar mit einem Augenzwinkern."
                            firstOption="Pragmatiker"
                            imageFirst={pragmatiker}
                            idFirst="dXCcts7bJps"
                            click={this.setModalId}
                        />
                    </Section>
                    <Section>
                        <p className="background-number number-bottom-right">3</p>
                        <ContentSingleLeft
                            headline="Der Hipster"
                            description="Inhalte, die sich wie ein Lauffeuer verbreiten und den Zuschauer vom Hocker
                            hauen? Wir setzen auf ungewohnte Blickwinkel, packendes Sounddesign und den gezielten
                            Einsatz von Stielmitteln wie Slow Motion oder Drohnenflügen. Eine Maßgeschneiderte
                            Bewegtbildproduktion nach den Bedürfnissen der Kanäle und Zielgruppen."
                            firstOption="Hipster"
                            imageFirst={hipster}
                            idFirst="fxRSscFpcIg"
                            click={this.setModalId}
                        />
                    </Section>
                    <Section>
                        <p className="background-number number-top-left">2</p>
                        <ContentSingleRight
                            headline="Zum Abschluss"
                            description="Haben sie ihre Zielgruppe exakt definiert und den perfekten Weg gefunden diese
                            zu erreichen? Wir glauben zwar an die Macht von Bildern, wissen aber auch wo und wann sie
                            Ihre Zuschauer am besten erreichen. Wir recherchieren, analysieren und erstellen gemeinsam
                            mit Ihnen ein Konzept für Ihre individuelle Medienproduktion. Lassen sie uns Ziele setzen,
                            intelligente Wege planen und losmarschieren!"
                            firstOption="Ende"
                            imageFirst={end}
                            idFirst="gVMixn5ZzHs"
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
