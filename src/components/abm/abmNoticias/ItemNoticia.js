import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEye,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ItemNoticia = (props) => {
  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.tituloNoticia}</td>
      <td>{props.item.autorNoticia}</td>
      <td>{props.item.descripcionNoticia}</td>
      <td>{props.item.categoria}</td>
      <td>
        <Link to={"/"} className="mr-2 text-success">
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Link>
        <Link to={"/"} className="mr-2 text-dark">
          <FontAwesomeIcon
            className="text-warning"
            icon={faStar}
          ></FontAwesomeIcon>
        </Link>
        <Link to={`/noticia/editar/${props.item.id}`} className="mr-2 text-dark">
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>
        <Link to={"/"} className="mr-2 text-danger">
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
};

export default ItemNoticia;
