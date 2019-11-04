import React from 'react';
import styled, { css } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faStackOverflow, faGithub, faLinkedin, faReact, faCss3, faHtml5, faJs, faGitAlt, faNode } from '@fortawesome/free-brands-svg-icons';
import { faGem, faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SVG from './components/SVG';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

library.add(fab, faGem, faBars, faStackOverflow, faGithub, faLinkedin, faReact, faCss3, faHtml5, faJs, faGitAlt, faNode);

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


function App() {
  return (
      <div className="App">
        <Navigation />
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/svg" component={SVG} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
          </Router>
        <Footer />
      </div>
  );
}

export default App;
