import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

function NavHome() {
  return (
    <div>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavHome;
