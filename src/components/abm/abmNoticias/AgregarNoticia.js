import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Swal from 'sweetalert2';

const AgregarNoticia = (props) => {
  const [noticiaDestacada, setNoticiaDestacada] = useState(false);
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [descripcionNoticia, setDescripcionNoticia] = useState("");
  const [imagen, setImagen] = useState("");
  const [cuerpoNoticia, setCuerpoNoticia] = useState("");
  const [autorNoticia, setAutorNoticia] = useState("");
  const [fechaNoticia, setFechaNoticia] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    console.log("en funcion submit");
    //valido datos
    if (tituloNoticia.trim() === "" || descripcionNoticia.trim() === "" || descripcionNoticia.trim() === "" || imagen.trim() === "" || cuerpoNoticia.trim() === "" || autorNoticia.trim() === "" || fechaNoticia.trim() === "") {
      //mostrar error
      setError(true);
      return;
    }
    setError(false);
    //agregar objeto a api
    //objeto noticia
    const datos = {
      noticiaDestacada,
      tituloNoticia,
      descripcionNoticia,
      imagen,
      cuerpoNoticia,
      autorNoticia,
      fechaNoticia,
      categoria
    }

    //agregamos estructura para manejar errores
    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
      }
      const resultado = await fetch("http://localhost:3000/noticias", cabecera);
      console.log(resultado);

      if (resultado.status === 201) {
        Swal.fire(
          'Noticia Creada',
          'La noticia se agregó correctamente',
          'success'
        )
      } else {
        Swal.fire(
          'Oopss...',
          'Ocurrió un error, intentelo nuevamente',
          'error'
        )
      }

    } catch (excepcion) {
      console.log(excepcion);
      Swal.fire(
        'Oopss...',
        'Ocurrió un error, intentelo nuevamente',
        'error'
      )
    }

  }

  return (
    <Container>
      <h2 className="w-100 text-center my-4">Agregar una Noticia</h2>
      <hr></hr>
      <Form onSubmit={handleSubmit}>
        {
          (error) ? <Alert variant={"danger"}>Todos los campos son obligatorios</Alert> : null
        }
        <Form.Group className="d-flex">
          <Form.Label>Noticia destacada</Form.Label>
          <p className="mr-1 ml-4">No</p>
          <Form.Check
            type="switch"
            id="destaca"
            checked={noticiaDestacada}
            label="Si"
            onChange={(e) => setNoticiaDestacada(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Título *</Form.Label>
          <Form.Control
            placeholder="Escriba aqui el titulo de la noticia"
            type="text"
            onChange={(e) => setTituloNoticia(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="descripcionNoticia">
          <Form.Label>Descripcion breve *</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={(e) => setDescripcionNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen *</Form.Label>
          <Form.Control
            placeholder="Inserte la URL de la imagen"
            type="text"
            onChange={(e) => setImagen(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="cuerpoNoticia">
          <Form.Label>Cuerpo de la noticia *</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            onChange={(e) => setCuerpoNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor *</Form.Label>
          <Form.Control
            placeholder="Nombre del autor de la noticia"
            type="text"
            onChange={(e) => setAutorNoticia(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha *</Form.Label>
          <Form.Control
            placeholder="DD/MM/AAAA"
            type="date"
            onChange={(e) => setFechaNoticia(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="text-center">
          <Form.Label className="w-100">
            <h3>Categoria</h3>
          </Form.Label>
        </Form.Group>
        <div className="text-center mb-4">
          {
            props.listaCategorias.map((item, pos) => {
              return (<Form.Check
                key={pos}
                inline
                label={item.nombreCategoria}
                type="radio"
                value={item.nombreCategoria}
                name="categoria"
                onChange={seleccionarCategoria}
              ></Form.Check>)
            })
          }
        </div>

        <Button className="w-100 mb-4 " variant="danger" type="submit">
          Guardar Noticia
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarNoticia;
