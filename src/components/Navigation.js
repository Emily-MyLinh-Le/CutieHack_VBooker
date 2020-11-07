import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';


function Navigation() {
    return(
       <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">VBooker </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
          </Nav>
          <Nav.Link href="/signin">Sign in</Nav.Link>
          
        </Navbar.Collapse>
      </Navbar>
      </>
    );
  
    }  

export default Navigation;
