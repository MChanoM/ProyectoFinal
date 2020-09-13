import React from "react";
import { Container, Col, Row, Nav, Badge } from "react-bootstrap";

const PaginaAdmin = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <div className="bg-info text-light d-flex justify-content-center align-items-start py-2 my-2 w-100">
            <h4 className="mr-1">Página de Administración</h4>
            <p>
              <Badge variant="dark">vBeta</Badge>
            </p>
          </div>
        </Row>
      </Container>
      <Container>
        <Row className="my-3">
          <h5 className="ml-5 lead">Bienvenidos USUARIO,</h5>
        </Row>
        <Row>
          <Nav variant="pills" defaultActiveKey="/admin">
            <Nav.Item>
              <Nav.Link className="btn btn-info" href="/admin">Categorias</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-info" eventKey="link-1">Noticias</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-info text-dark" eventKey="disabled" disabled>
                Usuarios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-info text-dark" eventKey="disabled" disabled>
                Metricas
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    </div>
  );
};

export default PaginaAdmin;
