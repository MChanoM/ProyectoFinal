import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const Suscribirse = () => {
  return (
    
    <div>
      <h1 className="text-center font-weight-bold  text-primary">
        Suscribite y leé News Pro. sin limites
      </h1>
      <h2 className="text-center font-weight-bold text-primary">
        Toda la información que necesitás en un solo lugar.
      </h2>
      <div className="container my-4">
        <div className="row">
          <Link
            className="col-sm-12 col-md 4 text-center my-4 text-dark cardEntera"
            to={"/suscribirse/newspro"}
          >
            <Card style={{ width: "100" }}>
              <Card.Body className="cardsSuscripcion">
                <Card.Title className="font-weight-bold my-4">
                  News Pro.
                </Card.Title>
                <Card.Text>
                  <span className="display-4">$ 0</span>,00
                </Card.Text>
                <Card.Text>
                  <p className="bg-primary text-white py-2">DURANTE 1 MES</p>
                  <p>luego $300 por mes</p>
                </Card.Text>
                <Button variant="primary" className="my-4">
                  SUSCRIBITE
                </Button>
              </Card.Body>
            </Card>
          </Link>
          <Link
            className="col-sm-12 col-md 4 text-center my-4 text-dark cardEntera"
            to={"/404"}
          >
            <Card style={{ width: "100" }}>
              <Card.Body className="cardsSuscripcion">
                <Card.Title className="font-weight-bold my-4">
                  News Pro. pack completo
                </Card.Title>
                <Card.Text>
                  <span className="display-4">$ 150</span>,00
                </Card.Text>
                <Card.Text>
                  <p className="bg-primary text-white py-2">DURANTE 6 MESES</p>
                  <p>luego $450 por mes</p>
                </Card.Text>
                <Button variant="primary" className="my-4">
                  SUSCRIBITE
                </Button>
              </Card.Body>
            </Card>
          </Link>
          <Link
            className="col-sm-12 col-md 4 text-center my-4 text-dark cardEntera"
            to={"/404"}
          >
            <Card style={{ width: "100" }}>
              <Card.Body className="cardsSuscripcion">
                <Card.Title className="font-weight-bold my-4">
                  News Pro. pack premium
                </Card.Title>
                <Card.Text>
                  <span className="display-4">$ 450</span>,00
                </Card.Text>
                <Card.Text>
                  <p className="bg-primary text-white py-2">DURANTE 12 MESES</p>
                  <p>luego $700 por mes</p>
                </Card.Text>
                <Button variant="primary" className="my-4">
                  SUSCRIBITE
                </Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
      

  
    </div>
  );
};

export default Suscribirse;
