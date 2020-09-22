import React, { useState, useRef } from "react";
import { Container, Alert, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Swal from "sweetalert2";

const EditarNoticia = (props) => {
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  //aca creo los ref
  const [noticiaDestacada, setNoticiaDestacada] = useState(false);
  const tituloNoticiaRef = useRef("");
  const descripcionNoticiaRef = useRef("");
  const imagenRef = useRef("");
  const cuerpoNoticiaRef = useRef("");
  const autorNoticiaRef = useRef("");
  const fechaNoticiaRef = useRef("");

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validar datos
    let _categoria = categoria === "" ? props.noticia.categoria : categoria;
    console.log(_categoria);
    console.log(tituloNoticiaRef);
    console.log(tituloNoticiaRef.current.value);
    console.log(descripcionNoticiaRef.current.value);
    if (
      tituloNoticiaRef.current.value.trim() === "" ||
      descripcionNoticiaRef.current.value.trim() === "" ||
      _categoria === "" ||
      imagenRef.current.value.trim() === "" ||
      autorNoticiaRef.current.value.trim() === "" ||
      fechaNoticiaRef.current.value.trim() === "" ||
      cuerpoNoticiaRef.current.value.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    // preparar el objeto con los nuevos datos
    const noticiaEditada = {
      tituloNoticia: tituloNoticiaRef.current.value,
      descripcionNoticia: descripcionNoticiaRef.current.value,
      imagen: imagenRef.current.value,
      cuerpoNoticia: cuerpoNoticiaRef.current.value,
      autorNoticia: autorNoticiaRef.current.value,
      fechaNoticia: fechaNoticiaRef.current.value,
      categoria: _categoria,
    };

    try {
      const cabecera = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noticiaEditada),
      };
      const resultado = await fetch(
        `http://localhost:4000/api/noticias/${props.noticia.id}`,
        cabecera
      );
      console.log(resultado);
      if (resultado.status === 200) {
        //se modificaron correctamente los datos
        props.consultarNoticias();
        Swal.fire(
          "Noticia Editada!",
          "La noticia se actualizo correctamente",
          "success"
        );
        props.history.push("/admin");
      }
    } catch (bug) {
      console.log(bug);
      Swal.fire("Oopss...", "Ocurrió un error, intentelo nuevamente", "error");
    }
  };

  return (
    <Container>
      <h1 className="w-100 text-center my-4">Edición de Notica</h1>
      <hr></hr>
      <Form onSubmit={handleSubmit}>
        {error ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <Form.Group className="d-flex">
          <Form.Label>Noticia destacada</Form.Label>
          <p className="mr-1 ml-4">No</p>
          <Form.Check type="switch" id="destaca" label="Si" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Título *</Form.Label>
          <Form.Control
            type="text"
            ref={tituloNoticiaRef}
            defaultValue={props.noticia.tituloNoticia}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="descripcionNoticia">
          <Form.Label>Descripcion breve *</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            ref={descripcionNoticiaRef}
            defaultValue={props.noticia.descripcionNoticia}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen *</Form.Label>
          <Form.Control
            type="text"
            ref={imagenRef}
            defaultValue={props.noticia.imagen}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="cuerpoNoticia">
          <Form.Label>Cuerpo de la noticia *</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            ref={cuerpoNoticiaRef}
            defaultValue={props.noticia.cuerpoNoticia}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor *</Form.Label>
          <Form.Control
            type="text"
            ref={autorNoticiaRef}
            defaultValue={props.noticia.autorNoticia}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha *</Form.Label>
          <Form.Control
            type="date"
            ref={fechaNoticiaRef}
            defaultValue={props.noticia.fechaNoticia}
          ></Form.Control>
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
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "economia"}
          ></Form.Check>
          <Form.Check
            inline
            label="Espectáculos"
            type="radio"
            value="espectaculo"
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "espectaculo"}
          ></Form.Check>
          <Form.Check
            inline
            label="Salud"
            type="radio"
            value="salud"
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "salud"}
          ></Form.Check>
          <Form.Check
            inline
            label="Politica"
            type="radio"
            value="politica"
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "politica"}
          ></Form.Check>
          <Form.Check
            inline
            label="Tecnología"
            type="radio"
            value="tecnologia"
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "tecnologia"}
          ></Form.Check>
          <Form.Check
            inline
            label="Fotografía"
            type="radio"
            value="fotografia"
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "fotografia"}
          ></Form.Check>
          <Form.Check
            inline
            label="Actualidad"
            type="radio"
            value="actualidad"
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "actualidad"}
          ></Form.Check>
          <Form.Check
            inline
            label="Deportes"
            type="radio"
            value="deportes"
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "deportes"}
          ></Form.Check>
        </div>

        <Button className="w-100 mb-4 " variant="danger" type="submit">
          Guardar Noticia
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(EditarNoticia);
