import React,{Component} from 'react';
import axios from 'axios';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import {
    NavLink,
    Redirect,

} from "react-router-dom";

import NumberContext from './../../context_api/NumberContext';
import Style from './style.js';

class Header extends Component{

    render(){
        return(
            <Style>
                    <div className='Header'>
                        <NumberContext.Consumer></NumberContext.Consumer>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand as={NavLink} to='/'>Library</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={NavLink} to='/buy'>Buy</Nav.Link>
                                <Nav.Link as={NavLink} to='/product'>Product</Nav.Link>                
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
            </Style>
        )
    }
}

export default Header;