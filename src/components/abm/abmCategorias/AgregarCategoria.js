import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";

const AgregarNoticia = () => {
  return (
    <Container>
      <h2 className="text-center my-4">Agregar Categorías</h2>
      <div className="d-flex justify-content-center">
        <Card className="my-4 w-75 shadow">
          <Card.Header className="text-left">Ingrese el nombre de la categoria</Card.Header>
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
                />
                <Button className="mx-2" variant="primary">
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
