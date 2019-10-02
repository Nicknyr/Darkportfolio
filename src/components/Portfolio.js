import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button, Card } from 'react-bootstrap';

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

    .card {
      margin-top: 2em;
      margin-bottom: 2em;
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
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="dark" text="white" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Dark Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card bg="dark" text="white" style={{ width: '18rem' }}>
                      <Card.Header>Header</Card.Header>
                      <Card.Body>
                        <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                          <Card.Title>Dark Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
        </Col>
      </Row>
    </STYLES>
  );
}

export default Portfolio;
