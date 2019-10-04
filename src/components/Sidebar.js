import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { TweenLite } from 'gsap';
import { Link } from 'react-router-dom';

const STYLES = styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif&display=swap');
  //font-family: 'IBM Plex Serif', serif;
  //font-family: 'IBM Plex Mono', monospace;
  background: #181818;
  height: 100VH;
  display: flex;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  a {
    color: #20FC8F;
    text-align: center;

    &:hover {
      text-decoration: none;
    }
  }

  .navigation {
    padding-left: 0;
    list-style-type: none;
    padding-top: 1.2em;
    padding-bottom: 1.2em;

    li {
      font-size: 1.2em;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .social {
    padding-left: 0;
    padding-top: 1em;
    list-style-type: none;
    display: inline-block;

    li {
      display: inline;
      margin: .5em;
    }
  }

  .home-link {
    padding-top: 3em;
    //background: red;
  }

`;

const H1 = styled.h1`
  color: snow;
  //color: #D81E5B;
  font-family: 'IBM Plex Serif', serif;
  margin: 0;
  flex: 1;
  padding-top: .5em;
`;

const H5 = styled.h5`
  color: snow;
  //color: #D81E5B;
  font-family: 'IBM Plex Serif', serif;
  font-style: italic;
  padding-bottom: .5em;
`;


class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount = () => {
    // use the node ref to create the animation
    //this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
  };

  render() {
    return(
      <STYLES className="d-none d-md-block">
      <Col>
        <Col className="home-link">
          <Link to="/home">
            <FontAwesomeIcon icon="gem" color="#20FC8F" size="4x" />
            <H1>Nick Kinlen</H1>
            <H5>Frontend Web Developer</H5>
          </Link>
        </Col>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="https://www.linkedin.com/in/nicholas-kinlen/">
              <FontAwesomeIcon
                     icon={['fab', 'linkedin']}
                     size="2x"
                     color="#20FC8F"
                     />
            </a>
          </li>
          <li>
            <a href="https://github.com/Nicknyr">
              <FontAwesomeIcon
                     icon={['fab', 'github']}
                     size="2x"
                     color="#20FC8F"
                   />
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/3875620/nick-kinlen">
             <FontAwesomeIcon
                    icon={['fab', 'stack-overflow']}
                    size="2x"
                    color="#20FC8F"
                  />
            </a>
          </li>
        </ul>
      </Col>
      </STYLES>
    );
  }
}

export default Sidebar;
