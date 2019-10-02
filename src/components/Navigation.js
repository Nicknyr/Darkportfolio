import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const STYLES = styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif&display=swap');
  //font-family: 'IBM Plex Serif', serif;
  //font-family: 'IBM Plex Mono', monospace;
  background: #181818;
  height: 5em;

  .navbar {
    width: 100%;
    background: #181818;
    display: flex;
  }

  .navbar-nav .nav-link {
    color: #20FC8F !important;
  }
`;

const H1 = styled.h1`
  color: snow;
  font-family: 'IBM Plex Serif', serif;
  margin: 0;
  flex: 1;
`;


class Navigation extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {
    return(
      <STYLES className="d-block d-md-none">
      <Navbar expand="lg">
				<Navbar.Brand href="#home">
          <FontAwesomeIcon icon="gem" color="#20FC8F" size="2x" />
        </Navbar.Brand>
        <H1>Nick Kinlen</H1>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
      </STYLES>
    );
  }
}

export default Navigation;
