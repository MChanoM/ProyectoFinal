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

const AgregarNoticia = (props) => {
    const [error, setError] = useState(false);
    const [estado, setEstado] = useState(true);
    const categoriaRef = useRef("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (categoriaRef === ""){
        setError(true);
        return
      }

      setError(false)
      setEstado(true)

      const categoriaEditada = {
        nombreCategoria: categoriaRef.current.value,
        estado: setEstado()
      };

      try {
        const cabecera = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoriaEditada),
        };
        const resultado = await fetch(
          `https://newsprorc.herokuapp.com/categorias/${props.categoria._id}`,
          cabecera
        );
        console.log(resultado);
        if (resultado.status === 200) {
          //se modificaron correctamente los datos
          props.consultarCat();
          Swal.fire(
            "Categoria Editada!",
            "La categoria se actualizo correctamente",
            "success"
          );
          props.history.push("/admin");
        }
      } catch (bug) {
        console.log(bug);
        Swal.fire("Oopss...", "Ocurrió un error, intentelo nuevamente", "error");
      }

    }


  return (
    <Container>
      <h2 className="text-center my-4">Editar Categorías</h2>
      <div className="d-flex justify-content-center">
        <Card className="my-4 w-75 shadow">
          <Card.Header className="text-left">Edite la categoria</Card.Header>
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faTable} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  ref={categoriaRef}
                  defaultValue={props.categoria.nombreCategoria}
                />
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

export default withRouter(AgregarNoticia);
