import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardNoticiaHorizontal from "./CardNoticiaHorizontal";

const PaginaCategoria = (props) => {
  return (
    <Container>
      <main className="row my-4">
        <section className="col-12 col-md-9">
          {props.listaNoticias.map((item, pos) => {
            if (item.categoria === props.categoria.nombreCategoria) {
              return (
                <div>
                  <CardNoticiaHorizontal
                    tituloNoticia={item.tituloNoticia}
                    descripcionNoticia={item.descripcionNoticia}
                    imagen={item.imagen}
                    cuerpoNoticia={item.cuerpoNoticia}
                    autorNoticia={item.autorNoticia}
                    fechaNoticia={item.fechaNoticia}
                    id={item._id}
                    key={pos}
                  ></CardNoticiaHorizontal>
                </div>
              );
            }
          })}
        </section>

        <section className="col-md-3 lineaVertical publicidadNone">
          <p>PUBLICIDAD O NOTICIAS DESTACADAS</p>
        </section>
      </main>
    </Container>
  );
};

export default PaginaCategoria;
