import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Card, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { withRouter } from "react-router";
import configs from '../../../urlconfig';

const AltaUsuario = (props) => {
  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState(["5f6fd0b77b64cb370c94b9fd"]);
  const authtoken = sessionStorage.getItem("authtoken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validacion del formulario
    let exp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (
      usuario.trim() === "" ||
      password.trim().length < 8 ||
      password.trim().length > 12 ||
      email.trim() === "" ||
      exp.test(email) === false
    ) {
      //no validado
      setError(true);
    } else {
      // validado
      setError(false);
      // armo el objeto y lo envio al backend
      const nuevoUsuario = {
        usuario,
        password,
        email,
        role: rol,
        userActive: true,
        sessionState: false,
      };

      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ["x-access-token"]: authtoken,
        },
        body: JSON.stringify(nuevoUsuario),
      };

      const consulta = await fetch(
        `${configs.urlBackend}/api/users/nuevo`,
        cabecera
      );

      if (consulta.status === 200) {
        Swal.fire(
          "Usuario Creado!",
          "El usuario se creó correctamente!",
          "success"
        );
      } else {
        Swal.fire("Error!", "Ocurrió un error al crear el usuario!", "error");
      }
      props.history.push("/admin");
    }
  };

  const addRol = (e) => {
    const rolUsuario = rol;

    if (rolUsuario.indexOf(e.target.value) === -1) {
      rolUsuario.push(e.target.value);
    } else {
      rolUsuario.splice(rolUsuario.indexOf(e.target.value), 1);
    }
    setRol(rolUsuario);
  };

  return (
    <Container>
      <h2 className="text-center my-4">Alta de Usuario</h2>
      <div className="d-flex justify-content-center">
        <Card className="my-4 w-75 shadow">
          <Card.Header className="text-left">
            Ingrese los Datos del Usuario a agregar:
          </Card.Header>
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              {error ? (
                <Alert variant={"danger"}>
                  *Complete todos los campos obligatorios
                </Alert>
              ) : null}

              <Form.Group>
                <Form.Label>Usuario:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="* Ingrese su nombre de usuario"
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="* Ingrese un email valido"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="* Debe contener entre 8 y 12 caracteres"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Label>Elija el/los roles del nuevo Usuario:</Form.Label>
              <Form.Group>
                <Form.Check
                  inline
                  checked
                  disabled
                  type="checkbox"
                  value="5f6fd0b77b64cb370c94b9fd"
                  label="user"
                />
                {[
                  ["5f6fd0b87b64cb370c94b9ff", "editor"],
                  ["5f6fd0b87b64cb370c94b9fe", "admin"],
                ].map((rol, pos) => (
                  <Form.Check
                    inline
                    type="checkbox"
                    value={rol[0]}
                    label={rol[1]}
                    onChange={addRol}
                    key={pos}
                  />
                ))}
              </Form.Group>
              <Form.Label className="mb-3">*Campos obligatorios</Form.Label>
              <Button
                className="mx-2 mt-3 w-100"
                variant="primary"
                type="submit"
              >
                Agregar
              </Button>
            </Card.Body>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default withRouter(AltaUsuario);
