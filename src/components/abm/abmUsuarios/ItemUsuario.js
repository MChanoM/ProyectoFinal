import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import configs from "../../../urlconfig";

const ItemUsuario = (props) => {
  const authtoken = sessionStorage.getItem("authtoken");
  const [iconoActivar, setIconoActivar] = useState(faCheckCircle);

  const cambiarEstado = async () => {
    try {
      let nuevoEstado = {};
      if (props.item.userActive) {
        nuevoEstado = { userActive: false };
        setIconoActivar(faTimesCircle);
      } else {
        nuevoEstado = { userActive: true };
        setIconoActivar(faCheckCircle);
      }

      const cabecera = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ["x-access-token"]: authtoken,
        },
        body: JSON.stringify(nuevoEstado),
      };

      const consulta = await fetch(
        `${configs.urlBackend}/api/users/cambiar-estado/${props.item._id}`,
        cabecera
      );

      if (consulta.status === 200) {
        Swal.fire(
          "Estado modificado!",
          "El estado se modificó correctamente!",
          "success"
        );

        //recargar admin
        props.history.push("/admin");
        props.setRecargarAdmin(true);
      } else {
        Swal.fire(
          "Error!",
          "Ocurrió un error al modificar el estado!",
          "error"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr>
      <td>{props.item.usuario}</td>
      <td>{props.item.email}</td>
      <td>
        {props.item.role.map((item) => {
          return (
            <span key={item._id} className="badge badge-danger mx-1">
              {item.name}
            </span>
          );
        })}
      </td>
      <td>{props.item.userActive ? "Activo" : "Inactivo"}</td>
      <td>{props.item.sessionState ? "Logueado" : "No Logueado"}</td>
      <td>
      {props.item._id !== "5f70b11082f8b215acaeff4b" ? (
        <Link
          to={`/usuario/editar/${props.item._id}`}
          className="mr-2 text-dark btnAcciones"
        >
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>) : '-'}
        <div className="mr-2 text-info btnAcciones">
          {props.item._id !== "5f70b11082f8b215acaeff4b" ? (
            <FontAwesomeIcon
              icon={iconoActivar}
              onClick={() => {
                cambiarEstado();
              }}
            ></FontAwesomeIcon>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default withRouter(ItemUsuario);
