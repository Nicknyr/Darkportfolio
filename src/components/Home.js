import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Tween, Timeline, Controls, SplitWords, SplitLetters } from 'react-gsap';

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

          <Tween from={{ x: '100px', rotation: -360 }}>
            <h2>Hi, my name is Nick and I am a frontend developer from NYC</h2>
          </Tween>

          <Timeline
            target={
              <h2>Hi, my name is Nick and I am a frontend developer from NYC</h2>
            }
          >
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
            <Tween from={{ x: '1200px' }} />
          </Timeline>


            <Tween
              from={{ x: '1000' }}
              duration={1}


            >
              <SplitWords>
                <div style={{ display: 'inline-block', fontSize: '40px' }}>
                  This is a Test
                </div>
              </SplitWords>
            </Tween>

            {/*
            <Tween
              staggerFrom={{ x: '300px' }}
              stagger={0.5}
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
                <ul style={{ perspective: '1000px', fontSize: '1.5rem' }} />
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
              <li>Rich Harris</li>
              <li>Dan Abramov</li>
              <li>Kyle Simpson</li>
              <li>Gregory Brown</li>
              <li>Addy Osmani</li>
              <li>Evan You</li>
              <li>Axel Rauschmayer</li>
              <li>Sarah Drasner</li>
              <li>André Staltz</li>
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
