import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faStackOverflow, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled, { css } from 'styled-components';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const STYLES = styled.div`
  background: #181818;
  display: flex;

  .fa-2x {
    margin: .7em;
  }
`;

const Footer = () => {
  return(
    <STYLES>
      <Container>
        <Row>
          <Col xs={12}>
          <a href="https://www.linkedin.com/in/nicholas-kinlen/">
            <FontAwesomeIcon
                   icon={['fab', 'linkedin']}
                   size="2x"
                   color="#20FC8F"
                 />
          </a>
          <a href="https://github.com/Nicknyr">
            <FontAwesomeIcon
                   icon={['fab', 'github']}
                   size="2x"
                   color="#20FC8F"
                 />
          </a>
          <a href="https://stackoverflow.com/users/3875620/nick-kinlen">
           <FontAwesomeIcon
                  icon={['fab', 'stack-overflow']}
                  size="2x"
                  color="#20FC8F"
                />
          </a>
          </Col>
        </Row>
      </Container>
    </STYLES>
  );
}

export default Footer;
