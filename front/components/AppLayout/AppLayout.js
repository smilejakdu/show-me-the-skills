import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import bootstrapStyle from "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container,Nav } from "react-bootstrap";
import { NavLinkCustom, NavbarBrandCustom } from "./AppLayout.style";


const AppLayout = ({children}) =>{
  return (
    <Navbar bg="light" expand="lg" 
    style={{borderBottom:"1px solid #ced4da",
            boxShadow:"0 4px 6px -6px #222"
    }}>
      <Container>
        <title>show me the skills</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style dangerouslySetInnerHTML={{ __html: bootstrapStyle }} />
        <NavbarBrandCustom href="/lesson"><a>Show Me the Skills</a></NavbarBrandCustom>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLinkCustom href="/lesson">Lesson</NavLinkCustom>
            <NavLinkCustom href="/mentoring">Mentoring</NavLinkCustom>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppLayout;