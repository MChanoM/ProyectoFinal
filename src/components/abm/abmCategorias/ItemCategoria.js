import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import configs from "../../../urlconfig";

const ItemCategoria = (props) => {
  const authToken = sessionStorage.getItem("authtoken");

  const eliminarCategoria = (idCategoria) => {
    console.log(idCategoria);
    Swal.fire({
      title: "¿Estas seguro?",
      text:
        "Una vez que elimines esta categoria, no podés volver atras y se puede perder el acceso a las noticias dentro de esta categoria",
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
              ["x-access-token"]: authToken,
            },
          };
          const consulta = await fetch(
            `${configs.urlBackend}/api/categorias/${idCategoria}`,
            cabecera
          );

          console.log(consulta);
          if (consulta.status === 200) {
            //aca si se borro la categoria y muestra cartel
            // props.consultarCat();
            props.setRecargarPagina(true);

            Swal.fire(
              "Eliminado!",
              "La categoria fue eliminada correctamente",
              "success"
            );
          }
          if (consulta.status === 403) {
            Swal.fire(
              "Oopss...",
              "No tienes los permisos para realizar esta acción...",
              "error"
            );
          }
        } catch (error) {
          console.log(error);
          Swal.fire(
            "Oopss...",
            "No tienes los permisos para realizar esta acción...",
            "error"
          );
        }
      }
    });
  };

  return (
    <tr>
      <td>{props.item.nombreCategoria}</td>
      <td>{props.item.estado}</td>
      <td>
        <Link
          to={`/categoria/editar/${props.item._id}`}
          className="mr-2 text-dark"
        >
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>
        <Link
          className="mr-2 text-danger"
          onClick={() => eliminarCategoria(props.item._id)}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
};

export default ItemCategoria;
