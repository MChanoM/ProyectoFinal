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
import Swal from 'sweetalert2';

const ItemNoticia = (props) => {

  const eliminarNoticia = (idNoticia) =>{
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
    }).then(async(result) => {
      if (result.value) {
        //aqui tengo que eliminar el producto
        try{
          const consulta = await fetch(`http://localhost:3000/noticias/${idNoticia}`,{
            method: "DELETE",
            headers:{
              "Content-Type": "application/json"
            }
          })

          console.log(consulta);
          if(consulta.status === 200){
            //aqui si se borró el producto
            // props.consultarNoticias();
            Swal.fire(
              'El producto fue eliminado.',
              'Su producto fue eliminado correctamente.',
              'success'
            )
          }
          
        }catch(error){
          console.log(error)
        }
      }
    })
  }

  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.tituloNoticia}</td>
      <td>{props.item.autorNoticia}</td>
      <td>{props.item.descripcionNoticia}</td>
      <td>{props.item.categoria}</td>
      <td>{props.item.fechaNoticia}</td>
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
        <Link className="mr-2 text-danger">
          <FontAwesomeIcon icon={faTrash} onClick={() => eliminarNoticia(props.item.id)}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
};

export default ItemNoticia;
