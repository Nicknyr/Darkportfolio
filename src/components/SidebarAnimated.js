import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { Container, Row, Col, Navbar, Brand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Tween, Timeline, Controls, SplitWords, SplitLetters } from 'react-gsap';


const SidebarAnimated = () => {
  return(
    <Timeline
      target={
        <Sidebar />
      }
    >
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
      <Tween from={{ x: '1200px' }} />
    </Timeline>
  );
}

export default SidebarAnimated;
