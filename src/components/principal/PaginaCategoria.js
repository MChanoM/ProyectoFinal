import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaginaCategoria = (props) => {
  return (
    <Container>
      <main className="row my-4">
        <section className="d-flex col-9">
          {props.listaNoticias.map((item, pos) => {
            if (item.categoria === props.categoria.nombreCategoria) {
              return (
                <div className="">
                  <div className="m-2 shadow p-3 mb-5 bg-white rounded">
                    <Card className="">
                      <Card.Img variant="top" src={item.imagen} />
                      <Card.Body>
                        <Card.Title>{item.tituloNoticia}</Card.Title>
                        <Card.Text>{item.descripcionNoticia}</Card.Text>
                        <Link
                          to={`/pagnoticia/${item.id}`}
                          className="btn btn-primary"
                        >
                          Leer más...
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                  
                </div>
              );
            }
          })}
        </section>

        <section className="col-3 lineaVertical">
          <p>PUBLICIDAD O NOTICIAS DESTACADAS</p>
        </section>
      </main>
    </Container>
  );
};

export default PaginaCategoria;
