import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ItemCategoria = (props) => {
  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.nombreCategoria}</td>
      <td>{props.item.estado}</td>
      <td>
        <Link to={`/categoria/editar/${props.item.id}`} className="mr-2 text-dark">
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>
        <Link to={"/"} className="mr-2 text-danger">
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
};

export default ItemCategoria;
