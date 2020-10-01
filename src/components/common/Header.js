import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Logo from "../../img/logo-sbg.png";
import { Link, withRouter, NavLink } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import Swal from 'sweetalert2';


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
          const consulta = await fetch('http://localhost:4000/api/auth/logout',cabecera);

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


          {/* <Button className="btn btn-success mx-2">Suscribite</Button> */}
          <Link to="/suscribirse" className="btn btn-success mr-2">Suscribirse</Link>
          <Link onClick={handleShow} className="btn btn-outline-info">{props.btnIngresar}</Link>
          
          {props.loginAdmin ? (<Link to={"/admin"} className="btn btn-outline-info ml-2">Administrar</Link>) : null}

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
