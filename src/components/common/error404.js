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
      <hr className="mb-4" />
      <div className="d-none d-md-block ">
        <div className="row justify-content-center">
          <a href="">
            <img
              src="https://tpc.googlesyndication.com/simgad/10495352078616386191"
              className="publicidadLarga"
            ></img>
          </a>
        </div>
      </div>
      <hr className="mb-4" />
    </Jumbotron>

    
  );
};

export default error404;
