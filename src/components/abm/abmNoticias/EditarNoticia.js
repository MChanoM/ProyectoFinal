import React, { useState, useRef } from "react";
import { Container, Alert, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const EditarNoticia = (props) => {
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  //aqui creo los ref
  const [noticiaDestacada, setNoticiaDestacada] = useState(false);
  const tituloRef = useRef("");
  const autorRef = useRef("")
  const descripcionBreveRef = useRef("")
  const cuerpoNoticiaRef = useRef("")
  const imagenRef = useRef("")
  const fechaRef = useRef("")

    const seleccionarCategoria = (e) => {
      setCategoria(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      //validar datos
      let _categoria = categoria === "" ? props.producto.categoria : categoria;
      console.log(_categoria);
      console.log(tituloRef);
      console.log(tituloRef.current.value);
      console.log(descripcionBreveRef.current.value);
      if (
        tituloRef.current.value.trim() === "" ||
        descripcionBreveRef.current.value.trim() === "" ||
        _categoria === ""
      ) {
        setError(true);
        return;
      }

      setError(false);

      //preparar el objeto con los nuevos datos
      const productoEditado = {
        titulo:tituloRef.current.value,
        descripcion:descripcionBreveRef.current.value,
        categoria: _categoria
      }

      try {
        const cabecera = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productoEditado)
        };
        const resultado = await fetch(
          `http://localhost:4000/cafeteria/${props.producto.id}`,
          cabecera
        );
        console.log(resultado);
        if(resultado.status === 200){
          //se modificaron correctamente los datos
          props.setRecargarProductos(true);
          Swal.fire(
            'Producto modificado!',
            'El producto se modifico correctamente',
            'success'
          )
          props.history.push("/productos");
        }
      } catch (bug) {
        console.log(bug);
      }
    };

  return (
    <Container>
      <h1 className="w-100 text-center my-4">Edición de Notica</h1>
      <hr></hr>
      <Form onSubmit={handleSubmit}>
        <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        <Form.Group className="d-flex">
          <Form.Label>Noticia destacada</Form.Label>
          <p className="mr-1 ml-4">No</p>
          <Form.Check type="switch" id="destaca" label="Si" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Título *</Form.Label>
          <Form.Control
            placeholder="Escriba aqui el titulo de la noticia"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion breve *</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen *</Form.Label>
          <Form.Control
            placeholder="Inserte la URL de la imagen"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Cuerpo de la noticia *</Form.Label>
          <Form.Control as="textarea" rows="10" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor *</Form.Label>
          <Form.Control
            placeholder="Nombre del autor de la noticia"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha *</Form.Label>
          <Form.Control placeholder="DD/MM/AAAA" type="text"></Form.Control>
        </Form.Group>
        <Form.Group className="text-center">
          <Form.Label className="w-100">
            <h3>Categoria</h3>
          </Form.Label>
        </Form.Group>
        <div className="text-center mb-4">
          <Form.Check
            inline
            label="Economia"
            type="radio"
            value="economia"
            name="categoria"
          ></Form.Check>
          <Form.Check
            inline
            label="Espectáculos"
            type="radio"
            value="espectaculo"
            name="categoria"
          ></Form.Check>
          <Form.Check
            inline
            label="Salud"
            type="radio"
            value="salud"
            name="categoria"
          ></Form.Check>
          <Form.Check
            inline
            label="Politica"
            type="radio"
            value="politica"
            name="categoria"
          ></Form.Check>
          <Form.Check
            inline
            label="Tecnología"
            type="radio"
            value="tecnologia"
            name="categoria"
          ></Form.Check>
          <Form.Check
            inline
            label="Fotografía"
            type="radio"
            value="fotografia"
            name="categoria"
          ></Form.Check>
          <Form.Check
            inline
            label="Actualidad"
            type="radio"
            value="actualidad"
            name="categoria"
          ></Form.Check>
          <Form.Check
            inline
            label="Deportes"
            type="radio"
            value="deportes"
            name="categoria"
          ></Form.Check>
        </div>

        <Button className="w-100 mb-4 " variant="danger" type="submit">
          Guardar Noticia
        </Button>
      </Form>
    </Container>
  );
};

export default EditarNoticia;
