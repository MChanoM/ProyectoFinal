import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const error404 = () => {
  return (


    <Jumbotron className=" text-center">
      <h1 className="display-4">¡¡¡Ooopss!!!</h1>
      <p className="pError">
        La página a la que intentó acceder no está disponible.
      </p>
      <p className="pError">
        Continúe navegando en <span className="newsProError">NewsPro</span>
        <span className="puntoModal">.</span>
      </p>

      <Link to="/" className="btn btn-primary mr-2">Volver a inicio</Link>
    </Jumbotron>

    
  );
};

export default error404;
