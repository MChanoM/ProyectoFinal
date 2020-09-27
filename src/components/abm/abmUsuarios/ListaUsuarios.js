import React from 'react';
import ItemUsuario from './ItemUsuario';
import {Table} from 'react-bootstrap';

const ListaUsuarios = (props) => {

        return (
        <div>
        <h3 className="text-center my-3 bg-dark text-light rounded p-1">
          Usuarios
        </h3>
        <Table
          className="text-center mb-5"
          responsive
          striped
          bordered
          hove
          size="sm"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Roles</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {props.usuarios.map((item, pos) => {
              return (
                <ItemUsuario></ItemUsuario>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
};

export default ListaUsuarios;