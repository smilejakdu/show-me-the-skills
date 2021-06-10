import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLinkCustom, NavbarBrandCustom } from "./AppLayout.style";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        style={{
          borderBottom: "1px solid #ced4da",
          boxShadow: "0 4px 6px -6px #222",
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <NavbarBrandCustom>Show Me the Skills</NavbarBrandCustom>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <NavLinkCustom>Lesson</NavLinkCustom>
              </Nav.Link>
              <Nav.Link href="/mentoring">
                <NavLinkCustom>Mentoring</NavLinkCustom>
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              <a href="/login">Login</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </div>
  );
};

export default AppLayout;
