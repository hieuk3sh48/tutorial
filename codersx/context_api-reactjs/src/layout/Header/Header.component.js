import React, { Component } from "react";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Redirect } from "react-router-dom";
import { CartContext } from "./../../context_api/Cart";
import Style from "./style.js";

class Header extends Component {
  render() {
    return (
      <Style>
        <div className="Header">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand as={NavLink} to="/">
              Library
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/buy">
                  Buy
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product">
                  Product
                </Nav.Link>
                <CartContext.Consumer>
                  {({ cartItems }) => (
                    <Nav.Link as={NavLink} to="/buy">
                      Cart ({cartItems.length})
                    </Nav.Link>
                  )}
                </CartContext.Consumer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Style>
    );
  }
}

export default Header;
