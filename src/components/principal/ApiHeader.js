import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ApiClima from "./apis/ApiClima";
import ApiMoneda from "./apis/ApiMoneda";


const ApiHeader = () => {

  // modo testing: en true es fakeapi - en false llama a las api
  const test = false;
  
  return (
    <Container fluid >
      <Row className="bg-info text-light d-flex align-items-center">
        <Col>
          <ApiMoneda test={test}></ApiMoneda>
        </Col>
        <Col>
          <ApiClima test={test}></ApiClima>
        </Col>
      </Row>
    </Container>
  );
};

export default ApiHeader;
