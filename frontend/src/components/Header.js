import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = (propsi) => {
  const { titles } = propsi;
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="#home">{titles}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
