import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faShare
} from "@fortawesome/free-solid-svg-icons";

const PaginaNoticia = (props) => {
  return (
    <Container>
      <section className="borde mt-4">
        <h1>{props.noticia.tituloNoticia}</h1>
        <p>{props.noticia.descripcionNoticia}</p>
      </section>

      <section className=" my-3 d-flex justify-content-between">
        <div className="d-flex flex-column">
          <p>Por {props.noticia.autorNoticia}</p>
          <div className="d-flex justify-content-between">
            <p>{props.noticia.fechaNoticia}</p>
            <span class="badge badge-pill badge-success h-50">{props.noticia.categoria}</span>
          </div>
        </div>

        <div>
          <img src={props.noticia.imagen} alt=""/>
        </div>

        <div>
          <FontAwesomeIcon icon={faThumbsUp} size="1x" className="mx-2" />
          <FontAwesomeIcon icon={faShare} size="1x" />
        </div>
      </section>

      <section className="borde mb-4">
        <p>
        {props.noticia.cuerpoNoticia}
        </p>
      </section>
    </Container>
  );
};

export default PaginaNoticia;
