import React, { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import configs from '../../urlconfig';

const ModalLogin = (props) => {
  //   const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);
  const [mail, setMail] = useState("");
  const [errorDos, setErrorDos] = useState(false);
  const [errorTres, setErrorTres] = useState(false);

  const handleClose = () => {
    props.setShow(false);
    setError(false);
    setErrorDos(false);
    setErrorTres(false);
  };
  //   const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validacion front user y pass
    if (user.trim() === "" || pass.trim() === "") {
      setErrorTres(true);
      setError(false);
    } else {
      setErrorTres(false);
      setError(false);
      try {
        // voy a hacer un fetch al backend con los datos de user y pass tokenizados
        const datos = {
          usuario: user,
          password: pass,
        };
     
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        };
        const loguear = await fetch(
          `${configs.urlBackend}/api/auth/login`,
          
          cabecera
        );
        const data = await loguear.json();
        sessionStorage.setItem("authtoken", data.token);

        if (loguear.status === 200) {
          // consulto usuario
          const cabecera = {
            headers: {
              ["x-access-token"]: data.token,
            },
          };
          const consulta = await fetch(
            `${configs.urlBackend}/api/users/me`,
            cabecera
          );
          const usuarioLogueado = await consulta.json();

          //verifico que esté activo el usuario
          if (usuarioLogueado.userActive) {
            //verifico que esté iniciada la sesion
            if (usuarioLogueado.sessionState) {
              props.setUsuario(usuarioLogueado);
              props.setLoginAdmin(true);
              props.setBtnIngresar("Cerrar Sesion");

              //setLogin a true para dar acceso al admin
              handleClose();
              props.setLoginAdmin(true);
              props.setBtnIngresar("Cerrar Sesion");
              props.history.push('/admin')
            }
          } else {
            setError(true);
          }
        } else {
          //setLogin a false y error 404
          setError(true);
          // console.log('datos erroneos');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    //validar front mail
    let exp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (mail !== "" && exp.test(mail)) {
      console.log("validado");
      setErrorDos(false);
      // envio mail al backend para q le envie las credenciales al usuario
      try {
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mail),
        };
        const enviarMail = await fetch(
          `${configs.urlBackend}/api/auth/admin`,
          cabecera
        );

        if (enviarMail.status === 201) {
          setErrorDos(false);
        } else {
          setErrorDos(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorDos(true);
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
        <Modal.Body className="text-center container">
          <h4>Ingresá con tu cuenta de Facebook o Google</h4>
          <Link to={"/*"} onClick={handleClose} className="linkModal">
            <div className="d-flex justify-content-center cuadroFacebook">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="facebook mx-2 ml-4"
              />
              <p className="my-2">Ingresá con Facebook</p>
            </div>
          </Link>
          <Link to={"/*"} onClick={handleClose} className="linkModal">
            <div className="d-flex justify-content-center cuadroGoogle">
              <FontAwesomeIcon
                icon={faGoogle}
                size="2x"
                className="google mx-2 ml-4"
              />
              <p className="my-2">Ingresá con Google</p>
            </div>
          </Link>
          <hr />
          {forgetPass ? null : (
            <Form onSubmit={handleSubmit}>
              <h4>Ingresá con tu usuario y contraseña</h4>
              <div className="mt-4 text-left">
                <Form.Group
                  controlId="formBasicEmail"
                  className="col-12"
                >
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Usuario"
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  className="col-12"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                  <div className="small text-right">
                  <a
                    onClick={() => {
                      setError(false);
                      setForgetPass(true);
                    }}
                    className="mt-0 text-info"
                  >
                    Recuperar mi contraseña
                  </a>
                </div>
                </Form.Group>
                
              </div>
              
                {/* <div className="row"> */}
                  <div className="mt-3">
                    <Button className="btn btn-block my-2" variant="primary" type="submit">
                      Iniciar sesión
                    </Button>
                    <Button className="btn btn-block my-2" variant="danger" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </div>
                {/* </div> */}
                {errorTres ? (
                  <Alert className="mt-3" variant={"primary"}>
                    Ingresa tus credenciales antes de continuar!
                  </Alert>
                ) : null}
                {error ? (
                  <Alert className="mt-3" variant={"primary"}>
                    Las Credenciales son incorrectas!
                  </Alert>
                ) : null}
              
            </Form>
          )}
          {forgetPass ? (
            <Form className="mt-3">
              <h4 className="mb-4">Recupera tu contraseña</h4>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Ingresa el mail con el que te registraste"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Button onClick={handleForgetPassword}>Recuperar</Button>
              <Button
                className="ml-2"
                variant="danger"
                onClick={() => {
                  setForgetPass(false);
                  setError(false);
                  setErrorTres(false);
                }}
              >
                Volver
              </Button>
              {errorDos ? (
                <Alert className="mt-3" variant={"primary"}>
                  Por favor ingresa un email valido!
                </Alert>
              ) : (
                <Alert className="mt-3" variant={"success"}>
                  Te enviamos un correo con tus credenciales!
                </Alert>
              )}
            </Form>
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withRouter(ModalLogin);
