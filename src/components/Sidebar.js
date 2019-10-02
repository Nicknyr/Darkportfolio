import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const STYLES = styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif&display=swap');
  //font-family: 'IBM Plex Serif', serif;
  //font-family: 'IBM Plex Mono', monospace;
  background: #181818;
  height: 100%;
  display: inline-block;

`;

const H1 = styled.h1`
  color: snow;
  font-family: 'IBM Plex Serif', serif;
  margin: 0;
  flex: 1;
`;


class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {
    return(
      <STYLES className="d-none d-md-block">
      <Col md={4}>
        <h1>Sidebar</h1>

      </Col>
      </STYLES>
    );
  }
}

export default Sidebar;
