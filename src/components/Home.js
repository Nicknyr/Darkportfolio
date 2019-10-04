import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Tween, Timeline } from 'react-gsap';


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
          {/*
          <Tween from={{ x: '100px', rotation: -360 }}>
            <h2>Hi, my name is Nick and I am a frontend developer from NYC</h2>
          </Tween>
          */}
          <Timeline
            target={
              <h2>Hi, my name is Nick and I am a frontend developer from NYC</h2>
            }
          >
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
            <Tween to={{ x: '200px' }} />
          </Timeline>
        </Col>
      </Row>
    </STYLES>
  );
}

export default Home;
