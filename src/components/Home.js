import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Tween, Timeline, Controls, SplitWords, SplitLetters } from 'react-gsap';
import Slider from './Slider';

const Square = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
  position: relative;
`;

const STYLES = styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif&display=swap');
  //font-family: 'IBM Plex Serif', serif;
  font-family: 'IBM Plex Mono', monospace;
  height: 100%;
  background: #222222;
  color: snow;

  .home {
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
    color: snow;
    text-align: center;
  }

  @keyframes fadeInOpacity {
    0% {
    opacity: 0;
    }
    100% {
    opacity: 1;
    }

    .technologies {
    }


}
`;


const Home = () => {
  return(
    <STYLES>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col xs={{span:12}} md={{span: 8}} className="home" >
          <Timeline
            target={
              <h2>Hi, my name is Nick and I am a frontend developer from NYC</h2>
            }
          >
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
            <Tween from={{ x: '1200px' }} />
          </Timeline>
          {/* <Slider /> */}
          {/*
            <Tween
              staggerFrom={{ x: '300px' }}
              stagger={0.1}
              duration={0.3}
              ease="Elastic.easeOut"
            >
              <SplitLetters>
                <div style={{ display: 'inline-block', fontSize: '40px' }}>This&nbsp;is&nbsp;a&nbsp;Test</div>
              </SplitLetters>
            </Tween>
            */}
            
            <Tween
              wrapper={
                <ul style={{ perspective: '1000px', fontSize: '1.5rem' }} className="technologies" />
              }
              staggerFrom={{
                opacity: 0,
                cycle: {
                  rotationX: [-90, 90],
                  transformOrigin: ['50% top -100', '50% bottom 100']
                },
              }}
              duration={1}
              stagger={0.1}
            >
              <li>
                <h3>React</h3>
                <FontAwesomeIcon
                   icon={['fab', 'react']}
                   size="lg"
                   color="#D81E5B"
                 />
              </li>
              <li>
                <h3>CSS3</h3>
                <FontAwesomeIcon
                   icon={['fab', 'css3']}
                   size="lg"
                   color="#D81E5B"
                 />
              </li>
              <li>
                <h3>HTML5</h3>
                <FontAwesomeIcon
                   icon={['fab', 'html5']}
                   size="lg"
                   color="#D81E5B"
                 />
             </li>
              <li>
                <h3>Javascript</h3>
                <FontAwesomeIcon
                   icon={['fab', 'js']}
                   size="lg"
                   color="#D81E5B"
                 />
              </li>
              <li>
                <h3>Git</h3>
                <FontAwesomeIcon
                   icon={['fab', 'git-alt']}
                   size="lg"
                   color="#D81E5B"
                 />
              </li>
              <li>
                <h3>NodeJS</h3>
                <FontAwesomeIcon
                   icon={['fab', 'node']}
                   size="lg"
                   color="#D81E5B"
                 />
              </li>
            </Tween>
            

            {/*

            <Tween
              staggerTo={{ x: '100px', rotation: -180 }}
              stagger={0.5}
              duration={2}
              repeat={1}
              yoyo={true}
              position="+=0"
              ease="Elastic.easeOut"
            >
              <Square />
              <Square />
            </Tween>

            */}

        </Col>
      </Row>
    </STYLES>
  );
}

export default Home;
