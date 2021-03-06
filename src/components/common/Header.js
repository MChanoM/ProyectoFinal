import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {DropdownButton, Dropdown, Button, ButtonGroup} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import Swal from 'sweetalert2';
import configs from '../../urlconfig';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


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
      }).then(async (result) => {
        if (result.value) {

          const cabecera = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ["x-access-token"]: authToken,
            },
            body: JSON.stringify(props.usuario)
          }
          const consulta = await fetch(`${configs.urlBackend}/api/auth/logout`,cabecera);

          if (consulta.status === 200) {
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
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className="fixed">
        <Sidebar listaCategorias={props.listaCategorias}></Sidebar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto h5">
            {/* navbar que se mostrara en dispositivos lg y xl*/}
            {
              props.listaCategorias.map((item, pos) => {
                if (item.nombreCategoria === "Actualidad" || item.nombreCategoria === "Política" ||
                  item.nombreCategoria === "Tecnología" || item.nombreCategoria === "Deportes") {
                  return (<Link className="text-white mx-2 d-none d-lg-block"
                    key={pos}
                    to={`/pagcategoria/${item._id}`}
                  >{item.nombreCategoria}</Link>)
                }
              })
            }
            {/* navbar en dispositivos medianos y small */}
            <div className="d-lg-none">
            <Nav.Link href="/"><FontAwesomeIcon icon={faHome} className="mr-2" />NewsPro<span className="text-primary">.</span></Nav.Link>
            {
              props.listaCategorias.map((item, pos) => {
                  return (<Link
                    key={pos}
                    to={`/pagcategoria/${item._id}`}
                    className="text-white my-3 d-flex flex-column"
                  >{item.nombreCategoria}</Link>)
              })
            }
            </div>
          </Nav>
          {/* <Button className="btn btn-success mx-2">Suscribite</Button> */}
          {props.loginAdmin ? ( <DropdownButton
          as={ButtonGroup}
          key='down'
          id={'dropdown-button-drop-down'}
          drop='down'
          variant='primary'
          title={props.usuario.usuario}
          >
          <Dropdown.Item><Link to={"/admin"}>{props.loginAdmin ? ('Administrar') : null}</Link></Dropdown.Item>
          <Dropdown.Item onClick={handleShow}>{props.btnIngresar}</Dropdown.Item>
          </DropdownButton>) : <Button variant="primary" onClick={handleShow}>Ingresar</Button>}
          <Link to="/suscribirse" className="btn btn-success mx-2">Suscribirse</Link>
          {/* <Link onClick={handleShow} className="btn btn-outline-info">{props.btnIngresar}</Link> */}
          
          {/* {props.loginAdmin ? (<Link to={"/admin"} className="btn btn-outline-info mr-2">Administrar</Link>) : null} */}

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
