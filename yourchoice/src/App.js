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
import FullpageWrapper from './Components/FullpageWrapper';


class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">

            </header>
            <main>
                <FullpageWrapper />
            </main>
            <footer>

            </footer>
        </div>
    );
  }
}

export default App;
