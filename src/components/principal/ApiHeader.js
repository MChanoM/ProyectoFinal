import React, {useState} from "react";
import { Row, Col, Container } from "react-bootstrap";
import ApiClima from "./ApiClima";
import ApiMoneda from "./ApiMoneda";


const ApiHeader = () => {

  const [test,setTest] = useState(true);
  
  return (
    <Container>
      <Row className="border d-flex align-items-center">
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
