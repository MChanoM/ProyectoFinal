import React, { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, withRouter } from "react-router-dom";

const ModalLogin = (props) => {
  //   const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const handleClose = () => props.setShow(false);
  const [error, setError] = useState(false);
  //   const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // voy a hacer un fetch al backend con los datos de user y pass tokenizados
      const datos = {
        user: user,
        pass: pass,
      };
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      };
      const loguear = await fetch(
        "https://newsprorc.herokuapp.com/api/login/admin",
        cabecera
      );
      console.log(loguear.status);
      if (loguear.status === 201) {
        //setLogin a true para dar acceso al admin
        setError(false);
        props.setLoginAdmin(true);
        handleClose();
        props.history.push('/admin');
        props.setBtnIngresar('Cerrar Sesion');

      } else {
        //setLogin a false y error 404
        setError(true);
        // console.log('datos erroneos');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="text-center tituloModal">
              NewsPro<span className="puntoModal">.</span>{" "}
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h4>Ingresá con tu cuenta de Facebook o Google</h4>
          <Link to={"/*"} onClick={handleClose} className="linkModal">
            <div className="d-flex justify-content-center cuadroFacebook">
              <FontAwesomeIcon
                icon={faFacebook}
                size="3x"
                className="facebook mx-2 ml-4"
              />
              <p className="my-2">Ingresá con facebook.</p>
            </div>
          </Link>
          <Link to={"/*"} onClick={handleClose} className="linkModal">
            <div className="d-flex justify-content-center cuadroGoogle">
              <FontAwesomeIcon
                icon={faGoogle}
                size="3x"
                className="google mx-2 ml-4"
              />
              <p className="my-2">Ingresá con Google.</p>
            </div>
          </Link>
          <hr />
          <h4>Ingresá tus datos de acceso</h4>
          <Form onSubmit={handleSubmit}>
            <div className="row mt-4 text-left">
              <Form.Group controlId="formBasicEmail" className="col-sm-12 col-md-6">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter user"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="col-sm-12 col-md-6">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </Form.Group>
            </div>
            <div className="w-100 mt-3 text-right">
              <Button className="mr-2" variant="primary" type="submit">
                Iniciar sesión
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cerrar
              </Button>
            </div>
            {error === true ? (
              <Alert className="my-3" variant={"danger"}>
                Las Credenciales son incorrectas!
              </Alert>
            ) : null}
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default withRouter(ModalLogin);
