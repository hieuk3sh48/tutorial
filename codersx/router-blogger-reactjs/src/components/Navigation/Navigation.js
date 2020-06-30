import React from 'react';
import { 
  Navbar,
  Nav,
} from 'react-bootstrap';
import {
  NavLink,
} from "react-router-dom";
import{
  Link,
  animateScroll as scroll,
}from "react-scroll";
import Styles from './style.js';

function Navigation() {
  return (
      <Styles>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} onClick={()=>scroll.scrollToTop()}>Bloger</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} onClick={()=>scroll.scrollToTop()}>Home</Nav.Link>
              <Nav.Link as={Link} 
                        to="footer"
                        smooth={true}
                        duration={500}
                        >About</Nav.Link>
            </Nav>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </Navbar.Collapse>
        </Navbar>
       
      </Styles>

  );
}

export default Navigation;
