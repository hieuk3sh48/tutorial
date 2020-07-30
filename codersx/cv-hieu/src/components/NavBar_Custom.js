import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    NavLink,
    Link
  } from "react-router-dom";

function NavBar_Custom() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/'>CV</Nav.Link>
                    <Nav.Link as={NavLink} to='/projects'>Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar_Custom
