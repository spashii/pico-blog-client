import React from "react"
import {Link} from "react-router-dom"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import logo from "../public/blog.svg"

const NavBar = () => {
  return <>
    <Navbar sticky="top" style={{
          backgroundColor: "#40a9ff"
        }} collapseOnSelect expand="md">
      <Navbar.Brand as={Link} to='/'><img className="mr-2" alt="logo" height={30} src={logo} />pico blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
    {
      // <Nav.Link as={Link} to='/' disabled>login</Nav.Link>
      // <Nav.Link as={Link} to='/' disabled>register</Nav.Link>
    }
            <Nav.Link as={Link} to='/'>home</Nav.Link>
            <Nav.Link as={Link} to='/about'>about</Nav.Link>
            <Nav.Link as={Link} to='/post/new' >new post</Nav.Link>
    {
      // <Nav.Link as={Link} to='/' disabled>profile</Nav.Link>
      // <Nav.Link as={Link} to='/' disabled>logout</Nav.Link>
    }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>;
}

export default NavBar;
