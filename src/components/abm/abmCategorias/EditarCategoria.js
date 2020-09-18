import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";

const AgregarNoticia = () => {
    const [categoria, setCategoria] = useState("");
  return (
    <Container>
      <h2 className="text-center my-4">Editar Categorías</h2>
      <div className="d-flex justify-content-center">
        <Card className="my-4 w-75 shadow">
          <Card.Header className="text-left">Edite la categoria</Card.Header>
          <Form>
            <Card.Body>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faTable} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre de la categoría"
                  onChange = {(e) => {setCategoria(e.target.value)}}
                />
                <Button className="mx-2" variant="primary">
                  Guardar
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
