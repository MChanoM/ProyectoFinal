import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";

// import { faFacebook } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="bg-dark py-2 position">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col sm={12} md={4} className="text-center">
            <p className="text-white">Seguinos en nuestras redes sociales:</p>
            <FontAwesomeIcon
              icon={faFacebook}
              size="3x"
              className="facebook mx-2"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              className="instagram mx-2"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="3x"
              className="twitter mx-2"
            />
          </Col>
          <Col sm={12} md={4} className="text-center">
            <h1 className="text-center my-4 py-2 tituloFooter">NewsPro</h1>
          </Col>
          <Col sm={12} md={4} className="text-center">
            <p className="text-white">
              Enterate de las noticias mas importantes primero!
            </p>
            <a className="mx-2 text-white h5">Suscribite</a>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-around">
          <Button variant="outline-secondary">Mapa del sitio</Button>
          <Button variant="outline-secondary">Ayuda</Button>
          <Button variant="outline-secondary">Columnistas</Button>
          <Button variant="outline-secondary">¿Como anunciar?</Button>
        </Row>
        <hr />
        <div className="piePagina">
          <p className="text-center text-white py-2">
            &copy; 2019 - 2020 Todos los derechos reservados. Número de edición
            9107 - Mes: 09 - Año: 24 Propietario: Diario NewsPro S.A. - CUIT
            30-50009907-6 Editor general: Raúl Pedone Propiedad Intelectual:
            5316959 San Martín 1049 - Tucumán
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
