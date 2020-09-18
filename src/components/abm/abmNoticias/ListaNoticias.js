import React from 'react';
import { Table } from "react-bootstrap";
import ItemNoticia from "./ItemNoticia";

const ListaNoticias = (props) => {


    return (
        <div>
            <h2 className="text-center my-3 bg-dark text-light rounded p-1">Lista de Noticias</h2>
            <Table className="text-center mb-5" responsive striped bordered hove size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Descripcin</th>
            <th>Categoria</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {props.noticias.map((item,pos)=>{
                return(<ItemNoticia key={pos} item={item}></ItemNoticia>)
            })}
        </tbody>
      </Table>
            
        </div>
    );
};

export default ListaNoticias;