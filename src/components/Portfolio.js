import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button, Card } from 'react-bootstrap';
import Formik from '../assets/formik.png';
import StackOverflow from '../assets/stackoverflow.png';
import EuroGDP from '../assets/eurogdp.png';
import RecipeBox from '../assets/recipebox.png';
import SpaceX from '../assets/spacex.png';
import Pomodoro from '../assets/pomodoro.png';
import Steem from '../assets/steem.png';
import Bitcoin from '../assets/bitcoin.png';

const STYLES = styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif&display=swap');
  //font-family: 'IBM Plex Serif', serif;
  font-family: 'IBM Plex Mono', monospace;
  height: auto;
  background: #222222;
  color: snow;

  .projects {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    padding-top: 5em;
    padding-bottom: 5em;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 2s;

    .card {
      margin-top: 2em;
      margin-bottom: 2em;

      a {
        color: #20FC8F;
      }
    }

    .card-header {
      color: #20FC8F;
      font-size: 1.1em;
    }
  }

  @keyframes fadeInOpacity {
    0% {
    opacity: 0;
    }
    100% {
    opacity: 1;
    }
}
}
`;

const Portfolio = () => {
  return(
    <STYLES>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col xs={{span:12}} md={{span: 8}} className="projects" >
          <Card bg="dark" text="white" style={{ width: '18rem' }}>
            <a href="https://formik-form.surge.sh/">
              <Card.Header>Formik Form</Card.Header>
            </a>
            <a href="https://formik-form.surge.sh/">
              <Card.Img variant="top" src={Formik}  height="200"/>
            </a>
              <Card.Body>
                <Card.Text>
                  <p>A React form with validation built with Formik, Yup, and React-Bootstrap. Check out my <a href="https://hackernoon.com/building-react-forms-with-formik-yup-and-react-bootstrap-with-a-minimal-amount-of-pain-and-suffering-1sfk3xv8">HackerNoon article</a> about how this project was built</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="dark" text="white" style={{ width: '18rem' }}>
              <a href="https://stackoverflowclone.surge.sh/">
                <Card.Header>Stack Overflow Clone</Card.Header>
              </a>
              <a href="https://stackoverflowclone.surge.sh/">
                <Card.Img variant="top" src={StackOverflow} height="200" />                
              </a>
                <Card.Body>
                  <Card.Text>
                    My implementation of StackOverflow's main page built with React, Styled-Components, and React-Bootstrap
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
                <a href="https://eurogdp.herokuapp.com/">
                  <Card.Header>Euro GDP</Card.Header>
                </a>
                <a href="https://eurogdp.herokuapp.com/">
                  <Card.Img variant="top" src={EuroGDP} height="200" />     
                </a>
                  <Card.Body>
                    <Card.Text>
                      European GDP by country built with Mapbox and Leaflet
                    </Card.Text>
                  </Card.Body>
                </Card>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
              <a href="https://steem-project.herokuapp.com/">
                <Card.Header>Steem blockchain</Card.Header>
              </a>
              <a href="https://steem-project.herokuapp.com/">
                <Card.Img variant="top" src={Steem} height="200" />  
              </a>
                <Card.Body>
                  <Card.Text>
                  A React and Redux web app that uses the dSteem API to pull social media posts from the Steem blockchain
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
              <a href="https://launchfacilities.herokuapp.com/">
                <Card.Header>NASA/SpaceX Facilities</Card.Header>
              </a>
              <a href="https://launchfacilities.herokuapp.com/">
                <Card.Img variant="top" src={SpaceX} height="200" />  
              </a>
                <Card.Body>
                  <Card.Text>
                  A Mapbox world map that plots NASA and SpaceX facilities using React-Leaflet, an official NASA API, and a SpaceX API
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
              <a href="https://codepen.io/nick_kinlen/full/yEYmxy/">
                <Card.Header>Bitcoin Price Linegraph</Card.Header>
              </a>
              <a href="https://codepen.io/nick_kinlen/full/yEYmxy/">
                <Card.Img variant="top" src={Bitcoin} height="200" />  
              </a>
                <Card.Body>
                  <Card.Text>
                    A D3.js line graph that makes a call to the CryptoCompare API and plots Bitcoin prices
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
              <a href="https://pomodoro-clock-fcc.surge.sh/">
                <Card.Header>Pomodoro Clock</Card.Header>
              </a>
              <a href="https://pomodoro-clock-fcc.surge.sh/">
                <Card.Img variant="top" src={Pomodoro} height="200" />  
              </a>
                <Card.Body>
                  <Card.Text>
                    A classic Pomodoro clock built with Jquery
                  </Card.Text>
                </Card.Body>
              </Card>
        </Col>
      </Row>
    </STYLES>
  );
}

export default Portfolio;
