import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ModalLogin = (props) => {
  //   const [show, setShow] = useState(false);

  const handleClose = () => props.setShow(false);
  //   const handleShow = () => setShow(true);

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
          <h4>Ingresá con tu correo electrónico</h4>
          <Form className="row mt-4">
            <Form.Group controlId="formBasicEmail" className="col-sm-12 col-md-6">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="col-sm-12 col-md-6">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Iniciar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalLogin;
