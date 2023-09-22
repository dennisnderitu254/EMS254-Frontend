import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/" className='text-light'>EMS254</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav text-light">
          <Nav className="mx-auto">
            <Nav.Item className="text-center">
              <Link to="/about" className="nav-link text-light">About</Link>
            </Nav.Item >
            <Nav.Item className="text-center">
              <Link to="/contact" className="nav-link text-light">Contact</Link>
            </Nav.Item>
            <Nav.Item className="text-center">
              <Link to="/login" className="nav-link text-light">Login</Link>
            </Nav.Item>
            <Nav.Item className="text-center">
              <Link to="/register" className="nav-link text-light">Register</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
