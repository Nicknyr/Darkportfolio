import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ContactForm from './ContactForm';

const STYLES = styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif&display=swap');
  //font-family: 'IBM Plex Serif', serif;
  font-family: 'IBM Plex Mono', monospace;
  height: auto;
  background: #222222;
  color: snow;

  h2 {
    padding: 1em;
    color: #20FC8F;
    text-align: center;
  }
  
  p {
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1.1em;
    line-height: 1.8;
  }

  .contact {
    margin-top: 3em;
    margin-bottom: 3em;
    text-align: left;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 2s;
    //background: red;
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

const Contact = () => {
  return(
    <STYLES>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col xs={{span: 12}} sm={{span: 10, offset: 1}} md={{span: 6, offset: 1}} className="contact">
          <h2>Contact</h2>
          <ContactForm />
        </Col>
      </Row>
    </STYLES>
  );
}

export default Contact;
