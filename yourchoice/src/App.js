import React, { Component } from 'react';
import * as Icon from 'react-feather';
import logo from './logo.svg';
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
    sectionPaddingBottom: '50px',
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
                    <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
                    <Section color="#A7DBD8"></Section>
                    <Section color="#E0E4CC">Page 3</Section>
                </SectionsContainer>
            </main>
            <footer>
                <a href="" className="opa">Dcoumentation</a>
                <a href="">Example Source</a>
                <a href="">About</a>
            </footer>
        </div>
    );
  }
}

export default App;
