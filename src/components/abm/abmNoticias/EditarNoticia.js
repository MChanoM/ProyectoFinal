import React, { useState, useRef } from "react";
import { Container, Alert, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Swal from "sweetalert2";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import configs from '../../../urlconfig';
import moment from "moment";


const EditarNoticia = (props) => {
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const [noticiaDestacada, setNoticiaDestacada] = useState("");
  const [cuerpoNoticiaEdit, setCuerpoNoticia] = useState("");
  //aca creo los ref
  const noticiaDestacadaRef = useRef("");
  const tituloNoticiaRef = useRef("");
  const descripcionNoticiaRef = useRef("");
  const imagenRef = useRef("");
  const cuerpoNoticiaRef = useRef("");
  const autorNoticiaRef = useRef("");
  const fechaNoticiaRef = useRef("");
  const authToken = sessionStorage.getItem("authtoken");
  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const destacaNoticia = (e) => {
    setNoticiaDestacada(e.target.value);
  };
  const edicionCuerpoNoticia = (data) => {
    setCuerpoNoticia(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validar datos
    let _categoria = categoria === "" ? props.noticia.categoria : categoria;
    if (
      tituloNoticiaRef.current.value.trim() === "" ||
      descripcionNoticiaRef.current.value.trim() === "" ||
      _categoria === "" ||
      imagenRef.current.value.trim() === "" ||
      autorNoticiaRef.current.value.trim() === "" ||
      fechaNoticiaRef.current.value.trim() === "" ||
      cuerpoNoticiaEdit.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
    console.log("paso la validacion")

    // preparar el objeto con los nuevos datos
    const noticiaEditada = {
      tituloNoticia: tituloNoticiaRef.current.value,
      descripcionNoticia: descripcionNoticiaRef.current.value,
      imagen: imagenRef.current.value,
      cuerpoNoticia: cuerpoNoticiaEdit,
      autorNoticia: autorNoticiaRef.current.value,
      fechaNoticia: fechaNoticiaRef.current.value,
      categoria: _categoria,
    };

    try {
      const cabecera = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ["x-access-token"]: authToken,
        },
        body: JSON.stringify(noticiaEditada),
      };
      const resultado = await fetch(
        `${configs.urlBackend}/api/noticias/${props.noticia._id}`,
        cabecera
      );
      // console.log(resultado);
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
      if (resultado.status === 403) {
        Swal.fire(
          "No Autorizado!",
          "No tiene autorizacion para editar",
          "error"
        );
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
          <Form.Check
            type="switch"
            id="destacaEdit"
            label="Si"
            defaultChecked={props.noticia.noticiaDestacada}
          />
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
          <CKEditor
            editor={ClassicEditor}
            data={props.noticia.cuerpoNoticia}
            onInit={(editor) => {

              console.log("CKEditor vive!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              edicionCuerpoNoticia(data);
            }}
            
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
            type="text"
            ref={fechaNoticiaRef}
            defaultValue={moment(props.noticia.fechaNoticia).add(1,'d').format('L')}
            disabled
          ></Form.Control>
        </Form.Group>
        <Form.Group className="text-center">
          <Form.Label className="w-100">
            <h3>Categoria</h3>
          </Form.Label>
        </Form.Group>
        <div className="text-center mb-4">
          {props.listaCategorias.map((item, pos) => {
            return (
              <Form.Check
                key={pos}
                inline
                label={item.nombreCategoria}
                type="radio"
                value={item.nombreCategoria}
                defaultChecked={
                  props.noticia.categoria === item.nombreCategoria
                }
                name="categoria"
                onChange={seleccionarCategoria}
              ></Form.Check>
            );
          })}
        </div>

        <Button className="w-100 mb-4 " variant="danger" type="submit">
          Guardar Noticia
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(EditarNoticia);
