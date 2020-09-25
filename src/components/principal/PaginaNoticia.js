import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";

const PaginaNoticia = (props) => {
  return (
    <Container>
      <section className="borde mt-4">
        <h1>{props.noticia.tituloNoticia}</h1>
        <p>{props.noticia.descripcionNoticia}</p>
      </section>
      <div className="d-flex my-3">
        <p>Por {props.noticia.autorNoticia}</p>
        <div className="d-flex mx-4">
          <p>{props.noticia.fechaNoticia}</p>
          <span class="badge badge-pill badge-success h-50 mx-4">
            {props.noticia.categoria}
          </span>
        </div>
        <div className="mx-1">
          <FontAwesomeIcon icon={faThumbsUp} size="1x" className="mx-2" />
          <FontAwesomeIcon icon={faShare} size="1x" />
        </div>
      </div>

      <section className=" mb-4 d-flex ">
        <img
          src={props.noticia.imagen}
          alt="imagen"
          className="w-100 justify-content-center"
        />
      </section>

      <section className="borde mb-4">
        <p className="lead">{props.noticia.cuerpoNoticia}</p>
      </section>
    </Container>
  );
};

export default PaginaNoticia;
