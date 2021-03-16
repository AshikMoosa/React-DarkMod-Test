
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl,Button  } from 'react-bootstrap';
import ThemeToggle from '../components/ThemeToggle';
import Link from 'next/link';
const Header = ({theme,toggleTheme}) => {
 

  return (
  
      <Navbar variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
        <Navbar.Brand href="/" className="fj-navbar-brand">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <ThemeToggle theme= {theme} onChange={toggleTheme}/>
          <Link href="/"><a className="fj-navbar-item fj-navbar-link">Home</a></Link>
          <Link href="about"><a className="fj-navbar-item fj-navbar-link">About</a></Link>
          <Link href="cv"><a className="fj-navbar-item fj-navbar-link">Cv</a></Link>
          <Link href="components"><a className="fj-navbar-item fj-navbar-link">Components</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
 
  );
}

export default Header;