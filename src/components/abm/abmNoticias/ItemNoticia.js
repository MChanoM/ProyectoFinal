import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEye,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
<<<<<<< HEAD
import configs from '../../../urlconfig';
=======
import moment from 'moment';
import 'moment/locale/es-do';
>>>>>>> dev-leo

const ItemNoticia = (props) => {

  const authToken = sessionStorage.getItem('authtoken');
  moment.locale('es');

  const eliminarNoticia = (idNoticia) => {
    console.log(idNoticia);
    Swal.fire({
      title: '¿Está seguro de eliminar la noticia?',
      text: "No puede recuperar una noticia eliminada.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.value) {
        //aqui tengo que eliminar el producto
        try {
          const cabecera = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              ['x-access-token'] : authToken
            }
          };
          const consulta = await fetch(`${configs.urlBackend}/api/noticias/${idNoticia}`, cabecera)

          console.log(consulta);
          if (consulta.status === 200) {
            //aqui si se borró el producto
            // props.consultarNoticias();
            props.setRecargarPagina(true);
            Swal.fire(
              'La noticia fue eliminada.',
              'La noticia se eliminó correctamente.',
              'success'
            )
          }

        } catch (error) {
          console.log(error);
          Swal.fire(
            'Oopss...',
            'Ocurrió un error, intentelo nuevamente',
            'error'
          )
        }
      }
    })
  }

  return (
    <tr>
      
      <td>{props.item.tituloNoticia}</td>
      <td>{props.item.autorNoticia}</td>
      <td>{props.item.descripcionNoticia}</td>
      <td>{props.item.categoria}</td>
      <td>{moment(props.item.fechaNoticia).add(1,'d').format('L')}</td>
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
        <Link to={`/noticia/editar/${props.item._id}`} className="mr-2 text-dark">
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>
        <Link className="mr-2 text-danger">
          <FontAwesomeIcon icon={faTrash} onClick={() => eliminarNoticia(props.item._id)}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
};

export default ItemNoticia;
