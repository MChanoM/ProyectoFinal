import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {Button, Alert} from "react-bootstrap";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

const SuscribirsePlan1 = (props) => {
  const [error, setError] = useState(false);
  const [nombreYApellido, setNombreYApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [codPostal, setCodPostal] = useState("");
  const [sexo, setSexo] = useState("");
  const [dia, setDia] = useState("--Dia--");
  const [mes, setMes] = useState("--Mes--");
  const [anio, setAnio] = useState("--Anio--");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombreYApellido.trim() === "" ||
      direccion.trim() === "" ||
      localidad.trim() === "" ||
      codPostal.trim() === "" ||
      sexo.trim() === "" ||
      sexo.trim() === "--seleccionar sexo--" ||
      dia.trim() === "--Dia--" ||
      mes.trim() === "--Mes--" ||
      anio.trim() === "--Anio--" ||
      correoElectronico.trim() === ""
      
    ){
      //mostrar cartel de error
      setError(true);
      return;
    }else{
      //los datos son correctos
      props.history.push("/");

      Swal.fire(
        'Registro exitoso',
        'El registro fue exitoso. En breve nos comunicaremos con usted para finalizar con la suscripción.',
        'success'
      )
    }
    setError(false);
  }


  return (
    <div className="container my-4">
        <h3 className="my-4">Completá tus datos para registrarte</h3>
      <Form className="row" onSubmit={handleSubmit}>
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control 
            placeholder="Nombre y apellido" 
            type="text"
            onChange={(e) => setNombreYApellido(e.target.value)}
            />
            <Form.Text className="text-muted">Escriba aqui su nombre y apellido</Form.Text>
          </Form.Group>
        </div>
       
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="">
            <Form.Label>Direccion</Form.Label>
            <Form.Control placeholder="Direccion"
            type="text"
            onChange={(e) => setDireccion(e.target.value)} />
            <Form.Text className="text-muted">
              Escriba aqui su Direccion
            </Form.Text>
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="">
            <Form.Label>Localidad</Form.Label>
            <Form.Control placeholder="Localidad" 
            type="text"
            onChange={(e) => setLocalidad(e.target.value)}/>
            <Form.Text className="text-muted">
              Escriba aqui su Localidad
            </Form.Text>
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="">
            <Form.Label>Codigo postal</Form.Label>
            <Form.Control  placeholder="Codigo postal" 
            type="number"
            onChange={(e) => setCodPostal(e.target.value)}/>
            <Form.Text className="text-muted">
              Escriba aqui su Codigo postal
            </Form.Text>
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Sexo</Form.Label>
            <Form.Control as="select"
            onChange={(e) => {
              setSexo(e.target.value);
            }}>
              <option>--seleccionar sexo--</option>
              <option>Hombre</option>
              <option>Mujer</option>
            </Form.Control>
          </Form.Group>
        </div>

        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <div className="d-flex">
              <Form.Control as="select" className="mx-1"
              onChange={(e) => {
                setDia(e.target.value);
              }}>
                <option>--Dia--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </Form.Control>
              <Form.Control as="select" className="mx-1"
              onChange={(e) => {
                setMes(e.target.value);
              }}>
                <option>--Mes--</option>
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Mayo</option>
                <option>Junio</option>
                <option>Julio</option>
                <option>Agosto</option>
                <option>Septiembre</option>
                <option>Octubre</option>
                <option>Noviembre</option>
                <option>Diciembre</option>
              </Form.Control>
              <Form.Control as="select" className="mx-1"
              onChange={(e) => {
                setAnio(e.target.value);
              }}>
                <option>--Anio--</option>
                <option>1980</option>
                <option>1981</option>
                <option>1982</option>
                <option>1983</option>
                <option>1984</option>
                <option>1985</option>
                <option>1986</option>
                <option>1987</option>
                <option>1988</option>
                <option>1989</option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
              </Form.Control>
            </div>
          </Form.Group>
        </div>

        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={(e) => setCorreoElectronico(e.target.value)}/>
            <Form.Text className="text-muted">
              No compartiremos tu mail con nadie mas.
            </Form.Text>
          </Form.Group>
        </div>
     
        {
              (error===true) ? <Alert className="text-center w-100" variant={'warning'}>
              Todos los campos son obligatorios
            </Alert> : null
          }
        <div className="col-12 d-flex justify-content-between">
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recibir notificaciones" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default withRouter(SuscribirsePlan1) ;
