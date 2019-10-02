import React from 'react';
import styled, { css } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faStackOverflow, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGem, faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

library.add(fab, faGem, faBars, faStackOverflow, faGithub, faLinkedin);

/*
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }


colors:
  black: #181818;
  green: #20FC8F;
  grey: #222222;
  red: #D81E5B;
*/

const STYLES = styled.div`
  height: 100VH;

  .app {
    height: 100VH;
  }
`;

function App() {
  return (
    <STYLES>
      <div className="App">
        <Navigation />
          <Router>
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Router>
        <Footer />
      </div>
    </STYLES>
  );
}

export default App;
