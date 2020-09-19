import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemCategoria = (props) => {
  const eliminarCategoria = (idCategoria) => {
    console.log(idCategoria);
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Una vez que elimines esta categoria, no podés volver atras",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        //aca elimino la categoria
        try {
          const cabecera = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
          };
          const consulta = await fetch(
            `http://localhost:3000/categorias/${idCategoria}`,
            cabecera
          );

          console.log(consulta);
          if (consulta.status === 200) {
            //aca si se borro la categoria y muestra cartel
            props.consultarCat();

            Swal.fire(
              "Eliminado!",
              "La categoria fue eliminada correctamente",
              "success"
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.nombreCategoria}</td>
      <td>{props.item.estado}</td>
      <td>
        <Link
          to={`/categoria/editar/${props.item.id}`}
          className="mr-2 text-dark"
        >
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>
        <Link
          className="mr-2 text-danger"
          onClick={() => eliminarCategoria(props.item.id)}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
};

export default ItemCategoria;
