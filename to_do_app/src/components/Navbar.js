import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-dark">
          Osumare
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-dark mx-2">
              Features
            </Nav.Link>
            <Nav.Link href="#" className="text-dark mx-2">
              Pricing
            </Nav.Link>
            <Nav.Link href="#" className="text-dark mx-2">
              Contact
            </Nav.Link>
          </Nav>
          
          <Button className="btn-light">
            Log in
          </Button>
          <Button className="btn-danger">
            Sign up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;