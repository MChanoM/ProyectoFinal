import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Logo from "../../img/logo-sbg.png";
import { Link, withRouter} from "react-router-dom";
import ModalLogin from "./ModalLogin";
import Swal from 'sweetalert2';
// import Collapse from "react-bootstrap/Collapse";

const Header = (props) => {
  //   const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [btnIngresar, setBtnIngresar] = useState('Ingresar');
  


  const handleShow = () => {
    if(btnIngresar === 'Cerrar Sesion'){
      Swal.fire({
        title: '¿Seguro desea Cerrar Sesion?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if(result.value){
          setBtnIngresar('Ingresar');
          props.setLoginAdmin(false);
          props.history.push('/');
        }
      })
    } else {
      setShow(true); 
    }
  }

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
          <Link onClick={handleShow} className="btn btn-outline-info">{btnIngresar}</Link>
         
        </Navbar.Collapse>
      </Navbar>
      
      <ModalLogin setBtnIngresar={setBtnIngresar} setLoginAdmin={props.setLoginAdmin} setShow={setShow} show={show}></ModalLogin>
      <div className="container">
          <h1 className="text-center my-4 py-2 titulo">NewsPro<span className="punto">.</span> </h1>
      </div>
    </div>
  );
};

export default withRouter(Header);
