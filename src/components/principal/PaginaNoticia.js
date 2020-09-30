import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";

const PaginaNoticia = (props) => {
  return (
    <Container>
      <span class="badge badge-pill badge-success mt-4">
        {props.noticia.categoria}
      </span>
      <section className="borde mt-2">
        <h1>{props.noticia.tituloNoticia}</h1>
        <p>{props.noticia.descripcionNoticia}</p>
      </section>
      <div className="d-flex justify-content-around">
        <p>Por {props.noticia.autorNoticia}</p>
        <div className="d-flex flex-column">
          <p>{props.noticia.fechaNoticia}</p>
        </div>
        <div>
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
