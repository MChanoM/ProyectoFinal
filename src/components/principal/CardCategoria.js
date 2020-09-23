import React from "react";
import { Link } from "react-router-dom";
import CardNoticia from "./CardNoticia";

const CardCategoria = (props) => {
  // console.log(props.listaNoticias);

  return (
    <div className="mb-2">
      <Link to={`/pagcategoria/${props.item._id}`}><h4 className="text-left">{props.item.nombreCategoria}</h4></Link>
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
                id={item._id}
                key={pos}
              ></CardNoticia>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardCategoria;
