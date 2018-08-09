import React, { Component } from 'react';
import * as Icon from 'react-feather';
import hero from './img/Konferenz Einstieg_Standbild.png';
import './App.css';
import VideoChoice from './Components/VideoChoice';
import VideoFullFrame from './Components/VideoFullFrame';
import OffCanvas from './Components/OffCanvas';
import OffCanvasNavigation from './Components/OffCanvasNavigation';
import ContentLeft from './Components/ContentLeft';
import ContentRight from './Components/ContentRight';
import Footer from './Components/Footer';
import {SectionsContainer, Section} from 'react-fullpage';


let options = {
    sectionClassName:     'section',
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
    scrollBar:            false,
    navigation:           true,
    verticalAlign:        false,
    sectionPaddingTop:    '50px',
    sectionPaddingBottom: '0px',
    arrowNavigation:      true
};

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <a href="#sectionOne" className="opa">Section One</a>
                <a href="#sectionTwo">Section Two</a>
                <a href="#sectionThree">Section Three</a>
            </header>
            <main>
                <SectionsContainer className="container" {...options}>
                    <Section className="custom-section" verticalAlign="true">
                        <div className="relative">
                            <img src={hero} alt="hero" className="hero-image"/>
                            <h1 className="hero-headline">mehr als nur werbung.</h1>
                        </div>
                    </Section>
                    <Section></Section>
                    <Section>Page 3</Section>
                </SectionsContainer>
            </main>
            <footer>

            </footer>
        </div>
    );
  }
}

export default App;
