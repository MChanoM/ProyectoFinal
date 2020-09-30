import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import Swal from "sweetalert2";

const EditarUsuario = (props) => {
  const [error, setError] = useState(false);
  const [rol, setRol] = useState([
    { _id: "5f6fd0b77b64cb370c94b9fd", name: "user" },
  ]);
  const emailRef = useRef("");
  const authToken = sessionStorage.getItem("authtoken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validacion del formulario
    let exp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (
      emailRef.current.value.trim() === "" ||
      exp.test(emailRef.current.value) === false
    ) {
      //no validado
      setError(true);
    } else {
      // validado
      setError(false);
      const nuevosDatos = {
        email: emailRef.current.value,
        role: rol,
      };

      const cabecera = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ["x-access-token"]: authToken,
        },
        body: JSON.stringify(nuevosDatos),
      };

      const consulta = await fetch(
        `http://localhost:4000/api/users/editar/${props.usuarioSeleccionado._id}`,
        cabecera
      );

      if (consulta.status === 200) {
        Swal.fire(
          "Usuario Editado!",
          "El usuario se editó correctamente!",
          "success"
        );
      } else {
        Swal.fire("Error!", "Ocurrió un error al editar el usuario!", "error");
      }

      props.history.push("/admin");
    }
  };

  const addRol = (e) => {
    const rolUsuario = props.usuarioSeleccionado.role;

    // console.log(rolUsuario);
    if (e.target.checked) {
      rolUsuario.push(e.target.value);
    } else {
      rolUsuario.splice(rolUsuario.indexOf(e.target.value), 1);
    }
    // console.log(rolUsuario)
    setRol(rolUsuario);
  };

  const chequearRol = (rolRender) => {
    // console.log(props.usuarioSeleccionado.role)

    const rolTarget = props.usuarioSeleccionado.role.find((item) => {
      return item._id === rolRender;
    });
    if (rolTarget === undefined) {
      return false;
    } else {
      if (rolTarget._id === rolRender) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">Editar Usuario</h2>
      <div className="d-flex justify-content-center">
        <Card className="my-4 w-75 shadow">
          <Card.Header className="text-left">Datos a modificar:</Card.Header>
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              {error ? (
                <Alert variant={"danger"}>
                  *Complete todos los campos obligatorios
                </Alert>
              ) : null}
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="* Ingrese un email valido"
                  ref={emailRef}
                  defaultValue={props.usuarioSeleccionado.email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
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
                    defaultChecked={chequearRol(rol[0])}
                  />
                ))}
              </Form.Group>
              <Form.Label className="mb-3">*Campos obligatorios</Form.Label>
              <Button
                className="mx-2 mt-3 w-100"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Guardar Cambios
              </Button>
              <Button
                className="mx-2 mt-3 w-100"
                variant="info"
                onClick={() => {
                  props.history.push("/admin");
                }}
              >
                Cancelar
              </Button>
            </Card.Body>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default withRouter(EditarUsuario);
