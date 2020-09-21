import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Logo from "../../img/logo-sbg.png";
import {Link} from "react-router-dom";
// import Collapse from "react-bootstrap/Collapse";

const Header = () => {
  //   const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="80"
            height="50"
            className="d-inline-block align-top"
            alt="logo news pro"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link href="#link">Actualidad</Nav.Link>
            <Nav.Link href="#link">Espectáculos</Nav.Link>
            <Nav.Link href="#link">Tecnología</Nav.Link>
            <Nav.Link href="#link">Deportes</Nav.Link>
            <NavDropdown title="Otras Categorías" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Politica</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Economía
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Salud</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fotografía</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          

          {/* <Button className="btn btn-success mx-2">Suscribite</Button> */}
          <Link to="/suscribirse" className="btn btn-success mr-2">Suscribirse</Link>
          <Link to="/admin" className="btn btn-outline-info">Ingresar</Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
          <h1 className="text-center my-4 py-2 titulo">NewsPro<span className="punto">.</span> </h1>
      </div>
    </div>
  );
};

export default Header;
