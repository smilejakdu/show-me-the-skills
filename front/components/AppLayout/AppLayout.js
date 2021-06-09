import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import bootstrapStyle from "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container,Nav } from "react-bootstrap";
import { NavLinkCustom, NavbarBrandCustom } from "./AppLayout.style";


const AppLayout = ({children}) =>{
  return (
      <div>
        <head>
          <title>show me the skills</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style dangerouslySetInnerHTML={{ __html: bootstrapStyle }} />
        </head>
      <Navbar
        bg="light"
        expand="lg"
        style={{
          borderBottom: "1px solid #ced4da",
          boxShadow: "0 4px 6px -6px #222",
        }}
      >
        <Container>
          <Navbar.Brand href="/lesson">
            <NavbarBrandCustom>Show Me the Skills</NavbarBrandCustom>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/lesson"><NavLinkCustom>Lesson</NavLinkCustom></Nav.Link>
              <Nav.Link href="/mentoring"><NavLinkCustom>Mentoring</NavLinkCustom></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  );
};

export default AppLayout;