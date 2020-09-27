import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


const ItemUsuario = (props) => {
  return (
    <tr>
      <td>Id usuario</td>
      <td>Nombre Usuario</td>
      <td>Roles</td>
      <td>Estado</td>
      <td>
        <Link
          to={'/'}
          className="mr-2 text-dark"
        >
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>
        <Link
          className="mr-2 text-danger"
          
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
};

export default ItemUsuario;
