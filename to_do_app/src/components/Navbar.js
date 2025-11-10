import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-dark">
          <img src="/do.png" alt="do_list" style={{width:'75px'}}/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="#"
              className="text-dark"
              style={{ fontSize: "20px" ,marginLeft:'155px'}}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-dark"
              style={{ fontSize: "20px" }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-dark"
              style={{ fontSize: "20px" }}
            >
              More Options
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-dark"
              style={{ fontSize: "20px" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Button variant="outline-danger" className="me-2" size="lg">
            Log in
          </Button>
          <Button variant="danger" size="lg">
            Sign up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
