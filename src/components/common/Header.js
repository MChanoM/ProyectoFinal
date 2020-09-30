import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {DropdownButton, Dropdown, Button, ButtonGroup} from "react-bootstrap";
import Logo from "../../img/logo-sbg.png";
import { Link, withRouter, NavLink } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import Swal from 'sweetalert2';
import configs from '../../urlconfig';


const Header = (props) => {
  const [show, setShow] = useState(false);
  const authToken = sessionStorage.getItem('authtoken');
  

  const handleShow = () => {
    
    if (props.btnIngresar === 'Cerrar Sesion') {
      Swal.fire({
        title: '¿Seguro desea Cerrar Sesion?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: "Cancelar"
      }).then(async(result) => {
        if (result.value) {

          const cabecera = {
            method: "POST",
            headers:{
              "Content-Type": "application/json",
              ["x-access-token"]: authToken,
            },
            body:JSON.stringify(props.usuario)
          }
          const consulta = await fetch(`${configs.urlBackend}/api/auth/logout`,cabecera);

          if (consulta.status === 200){
            props.setBtnIngresar('Ingresar');
            props.setLoginAdmin(false);
            props.setUsuario(null);
            //elimino el authtoken
            sessionStorage.removeItem('authtoken');
            props.history.push('/');
          }         
        }
      })
    } else {
      setShow(true);
    }
  }

  return (
    <div>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="80"
            height="50"
            className="d-inline-block align-top"
            alt="logo news pro"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {
                props.listaCategorias.map((item, pos) => {
                  if(item.nombreCategoria === "Actualidad" || item.nombreCategoria === "Política" ||
                  item.nombreCategoria === "Tecnología" || item.nombreCategoria === "Deportes"){
                    return (<Nav.Link
                      key={pos}
                      href={`/pagcategoria/${item._id}`}
                      className="text-white mx-2"
                    >{item.nombreCategoria}</Nav.Link>)
                  }                   
                })
            }
            
            <NavDropdown title="Otras" id="collasible-nav-dropdown">
              {
                props.listaCategorias.map((item, pos) => {
                  if(item.nombreCategoria !== "Actualidad" || item.nombreCategoria !== "Política" ||
                  item.nombreCategoria !== "Tecnología" || item.nombreCategoria !== "Deportes"){
                    return (<NavDropdown.Item
                      key={pos}
                      href={`/pagcategoria/${item._id}`}
                    >{item.nombreCategoria}</NavDropdown.Item>)
                  }
                })
              }
            </NavDropdown>
          </Nav>
          {props.loginAdmin ? ( <DropdownButton
          as={ButtonGroup}
          key='left'
          id={'dropdown-button-drop-left'}
          drop='left'
          variant='primary'
          title={props.usuario.usuario}
          >
          <Dropdown.Item href="/admin">{props.loginAdmin ? ('Administrar') : null}</Dropdown.Item>
          <Dropdown.Item onClick={handleShow}>{props.btnIngresar}</Dropdown.Item>
          </DropdownButton>) : <Button variant="primary" onClick={handleShow}>Ingresar</Button>}

         
          <Link to="/suscribirse" className="btn btn-success ml-2">Suscribirse</Link>
        </Navbar.Collapse>
      </Navbar>

      <ModalLogin setUsuario={props.setUsuario} setBtnIngresar={props.setBtnIngresar} setLoginAdmin={props.setLoginAdmin} setShow={setShow} show={show} setRecargarPagina={props.setRecargarPagina}></ModalLogin>
      <div className="container">
        <h1 className="text-center my-4 py-2 titulo">NewsPro<span className="punto">.</span> </h1>
      </div>
    </div>
  );
};

export default withRouter(Header);
