import React, { Fragment, useState } from "react";
import { Container, Col, Row, Nav, Badge, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from "../common/Spinner";
import ListaCategorias from "./abmCategorias/ListaCategorias";
import ListaNoticias from "./abmNoticias/ListaNoticias";

const PaginaAdmin = () => {
  const [opc, setOpc] = useState("cat");
  const [loader, setLoader] = useState(false);


  const noticias = [
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:"true",publicada:"true" },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    { id: "24", titulo:"ADsdkasdkñalskdañlksdñalkdasasñdka", autor: "maxi", descripcion: "blabla", categoria: "policiales", destacada:true,publicada:true },
    
  ];

  const categorias = [
    { nombre: "policiales", activa: "si"},
    { nombre: "deportes", activa: "si" },
    { nombre: "espectaculos", activa: "si" },
    { nombre: "opinion", activa: "si" },
  ];



  const handleOpc = (opcion) => {
    setTimeout(() => {
      setOpc(opcion);
      setLoader(false);
    }, 1000);
  };

  const cargarOpcion = () => {
    if (loader === true) {
      return (
      
      <Spinner></Spinner>
      
      );
    } else {
      if (opc === "cat") {
        return <ListaCategorias categorias={categorias}></ListaCategorias>;
      } else {
        return <ListaNoticias noticias={noticias}></ListaNoticias>;
      }
    }
  };

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
          <h5 className="ml-1 lead">Bienvenidos NOMBRE DE USUARIO,</h5>
        </Row>
        <hr></hr>
        <Row>
          <Nav variant="pills" defaultActiveKey="/admin">
            <Nav.Item>
              <Button
                className="btn btn-info"
                onClick={() => {
                  handleOpc("cat");
                  setLoader(true);
                }}
              >
                Categorias
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button
                className="btn btn-info"
                onClick={() => {
                  handleOpc("not");
                  setLoader(true);
                }}
              >
                Noticias
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="btn btn-info" disabled>
                Usuarios
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="btn btn-info" disabled>
                Metricas
              </Button>
            </Nav.Item>
          </Nav>
        </Row>
        <hr></hr>
        <section className="">{cargarOpcion()}</section>
      </Container>
        
    </div>
  );
};

export default PaginaAdmin;