import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const STYLES = styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif&display=swap');
  //font-family: 'IBM Plex Serif', serif;
  font-family: 'IBM Plex Mono', monospace;
  height: auto;
  background: #222222;
  color: snow;

  p {
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1.1em;
    line-height: 1.8;
  }

  .about-section {
    margin-top: 3em;
    margin-bottom: 3em;
    text-align: left;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 2s;
  }

  h2 {
    padding: 1em;
    color: #20FC8F;
    text-align: center;
  }

  a {
    color: #20FC8F;
  }

  @keyframes fadeInOpacity {
    0% {
    opacity: 0;
    }
    100% {
    opacity: 1;
    }
}
`;

const About = () => {
  return(
    <STYLES>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col xs={{span:12}} md={{span: 8}} className="about-section">
          <h2>About Me</h2>
          <p>My name is Nick Kinlen and I am a front-end web developer living in the New York City metro area. I am passionate about all things web development with a focus on Javascript and React.</p>
          <p>I have 3 years experience building web applications and primarily use Javascript/HTML5/CSS as well as React.js, Redux, and other Javascript libraries such as Mapbox, Leaflet, D3, & Jquery.</p>
          <p>In addition to being passionate about technology I am also passionate about New York Rangers hockey, cryptocurrencies, entreprenurship, and working out.</p>
          <p>Interested in hiring me or collaborating on a project? I can be contacted on <a href="https://www.linkedin.com/in/nicholas-kinlen/">Linkedin</a> or you can contact me via email. You can also check out my <a href="https://github.com/Nicknyr">Github</a> or <a href="https://stackoverflow.com/users/3875620/nick-kinlen">Stack Overflow</a> profiles.</p>
          <p>Check out my blog articles pertaining to technology on <a href="https://hackernoon.com/@nick_kinlen">Hackernoon</a>.</p>
        </Col>
      </Row>
    </STYLES>
  );
}

export default About;
