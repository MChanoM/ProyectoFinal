import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardNoticiaHorizontal = (props) => {
  return (
    <Card className="mb-3 shadow p-3 mb-3 bg-white rounded">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Card.Img variant="top" src={props.imagen} />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{props.tituloNoticia}</Card.Title>
            <Card.Text>{props.descripcionNoticia}</Card.Text>
            <Link
              to={`/pagnoticia/${props.id}`}
              className="btn btn-primary"
            >
              Leer más...
            </Link>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default CardNoticiaHorizontal;
