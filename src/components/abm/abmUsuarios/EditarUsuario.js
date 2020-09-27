import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import Swal from "sweetalert2";

const EditarUsuario = () => {
    return (
        <Container>
        <h2 className="text-center my-4">Editar Usuarios</h2>
        <div className="d-flex justify-content-center">
          <Card className="my-4 w-75 shadow">
            <Card.Header className="text-left">Edite el usuario</Card.Header>
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
                    
                  />
                  <Form.Control as="select" className="ml-2">
                    <option value="">--Selecciona estado de categoria--</option>
                    <option value="activa">Activa</option>
                    <option value="inactiva">Inactiva</option>
                  </Form.Control>
                  <Button className="mx-2" variant="primary" type="submit">
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

export default EditarUsuario;