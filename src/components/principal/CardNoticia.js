import React from "react";
import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardNoticia = (props) => {
  return (
    <Card className="anchoCard mr-2 shadow p-3 mb-3 bg-white rounded">
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.tituloNoticia}</Card.Title>
        <Card.Text>{props.descripcionNoticia}</Card.Text>
        <Link to={`/pagnoticia/${props.id}`} className="btn btn-primary">Leer más...</Link>
      </Card.Body>
    </Card>
  );
};

export default CardNoticia;
