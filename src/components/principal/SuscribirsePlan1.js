import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SuscribirsePlan1 = () => {
  return (
    <div className="container my-4">
        <h3 className="my-4">Completá tus datos para registrarte</h3>
      <Form className="row">
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="email" placeholder="Nombre y apellido" />
            <Form.Text className="text-muted">Escriba aqui su nombre y apellido</Form.Text>
          </Form.Group>
        </div>
       
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="email" placeholder="Direccion" />
            <Form.Text className="text-muted">
              Escriba aqui su Direccion
            </Form.Text>
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="">
            <Form.Label>Localidad</Form.Label>
            <Form.Control type="email" placeholder="Localidad" />
            <Form.Text className="text-muted">
              Escriba aqui su Localidad
            </Form.Text>
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="">
            <Form.Label>Codigo postal</Form.Label>
            <Form.Control type="email" placeholder="Codigo postal" />
            <Form.Text className="text-muted">
              Escriba aqui su Codigo postal
            </Form.Text>
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Sexo</Form.Label>
            <Form.Control as="select">
              <option>Hombre</option>
              <option>Mujer</option>
            </Form.Control>
          </Form.Group>
        </div>

        <div className="col-sm-12 col-md-6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <div className="d-flex">
              <Form.Control as="select" className="mx-1">
                <option>Dia</option>
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
              <Form.Control as="select" className="mx-1">
                <option>Mes</option>
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
              <Form.Control as="select" className="mx-1">
                <option>Año</option>
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
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-6">
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </div>
        <div className="col-12 d-flex justify-content-between">
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default SuscribirsePlan1;
