import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';

export default class TopBar extends Component {
    render() {
        return (

            <Navbar style={{background: "#0E131F",}} variant="dark" expand="lg" fixed="top" className="px-auto">
            <Navbar.Brand href="#home" className="ml-5">3 Sons</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about-bcs">About-BCS</Nav.Link>
                <Nav.Link href="/register" className="nav-link btn btn-primary rounded-pill px-3 text-white mb-2 "><i class="fa fa-play-circle mr-2" aria-hidden="true"></i>Join</Nav.Link>
                <Nav.Link href="/login" className="nav-link btn btn-outline-primary rounded-pill px-3 ml-3 mb-2 ">Login</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>


        )
    }
}
