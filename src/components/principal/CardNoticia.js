import React from "react";
import { Card, Button } from "react-bootstrap";

const CardNoticia = (props) => {
  return (
    <Card className="w-25">
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.tituloNoticia}</Card.Title>
        <Card.Text>{props.descripcionNoticia}</Card.Text>
        <Button variant="primary">Leer más...</Button>
      </Card.Body>
    </Card>
  );
};

export default CardNoticia;
