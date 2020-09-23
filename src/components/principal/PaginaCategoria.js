import React from "react";
import { Container } from "react-bootstrap";

const PaginaCategoria = (props) => {
  return (
    <Container>
      <main className="row my-4">
        <section className="col-8">
          {props.listaNoticias.map((item, pos) => {
            if (item.categoria === props.categoria.nombreCategoria) {
              return (
                <div className="d-flex justify-content-between">
                  <img src={item.imagen} alt="" />
                  <div>
                    <h3>{item.tituloNoticia}</h3>
                    <p>{item.categoria}</p>
                    <p>{item.fechaNoticia}</p>
                    id={item._id}
                    key={pos}
                  </div>
                </div>
              );
            }
          })}
        </section>

        <section className="col-4 lineaVertical">
          <p>PUBLICIDAD O NOTICIAS DESTACADAS</p>
        </section>
      </main>
    </Container>
  );
};

export default PaginaCategoria;
