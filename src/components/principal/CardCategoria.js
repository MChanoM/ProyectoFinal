import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import CardNoticia from "./CardNoticia";

const CardCategoria = (props) => {
  console.log(props.listaNoticias);

  return (
    <Fragment className="mb-2">
      <h4 className="text-left">{props.item.nombreCategoria}</h4>
      <hr></hr>
      <div className="row justify-content-around my-2">
        {props.listaNoticias.map((item, pos) => {
          if (item.categoria === props.item.nombreCategoria && item.noticiaDestacada === "on") {
            return (
              <CardNoticia
                tituloNoticia={item.tituloNoticia}
                descripcionNoticia={item.descripcionNoticia}
                imagen={item.imagen}
                cuerpoNoticia={item.cuerpoNoticia}
                autorNoticia={item.autorNoticia}
                fechaNoticia={item.fechaNoticia}
                id={item.id}
                key={pos}
              ></CardNoticia>
            );
          }
        })}
      </div>
    </Fragment>
  );
};

export default CardCategoria;
