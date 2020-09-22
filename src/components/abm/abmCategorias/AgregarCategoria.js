import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Card, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const AgregarNoticia = () => {
  const [nombreCategoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    console.log("en el submit de categoria");

    if (nombreCategoria.trim() === "" || estado.trim() === "") {
      setError(true);
      // setEstado("inactiva");
      return;
    }

    setError(false);
    // setEstado("activa");
    console.log(estado);

    const categorias = {
      nombreCategoria,
      estado,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categorias),
      };
      const consulta = await fetch(
        "http://localhost:3000/categorias",
        cabecera
      );

      if (consulta.status === 201) {
        Swal.fire(
          "Categoría Creada",
          "La categoría se agregó correctamente",
          "success"
        );
      } else {
        Swal.fire(
          "Oopss...",
          "Ocurrió un error, intentelo nuevamente",
          "error"
        );
      }
    } catch (excepcion) {
      console.log(excepcion);
      Swal.fire("Oopss...", "Ocurrió un error, intentelo nuevamente", "error");
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">Agregar Categorías</h2>
      <div className="d-flex justify-content-center">
        <Card className="my-4 w-75 shadow">
          <Card.Header className="text-left">
            Ingrese el nombre de la categoria
          </Card.Header>
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              {error ? (
                <Alert variant={"danger"}>Es un campo obligatorio</Alert>
              ) : null}
              <Form.Label>Campo obligatorio *</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faTable} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre de la categoría"
                  onChange={(e) => {
                    setCategoria(e.target.value);
                  }}
                />
                <Form.Control as="select" className="ml-2" onChange={(e) => {
                  setEstado(e.target.value);
                }}>
                  <option value="">--Selecciona estado de categoria--</option>
                  <option value="activa">Activa</option>
                  <option value="inactiva">Inactiva</option>
                </Form.Control>
                <Button className="mx-2" variant="primary" type="submit">
                  Agregar
                </Button>
              </InputGroup>
            </Card.Body>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default AgregarNoticia;
