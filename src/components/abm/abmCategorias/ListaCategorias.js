import React from "react";
import { Table } from "react-bootstrap";
import ItemCategoria from "./ItemCategoria";

const ListaCategorias = (props) => {
  return (
    <div>
      <h3 className="text-center my-3 bg-dark text-light rounded p-1">Categorias</h3>
      <Table className="text-center mb-5" responsive striped bordered hove size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {props.categorias.map((item,pos)=>{
                return(<ItemCategoria key={pos} item={item}></ItemCategoria>)
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaCategorias;
