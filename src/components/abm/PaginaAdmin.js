import React, { useState, useEffect } from "react";
import { Container, Col, Row, Nav, Badge, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import Spinner from "../common/Spinner";
import ListaCategorias from "./abmCategorias/ListaCategorias";
import ListaNoticias from "./abmNoticias/ListaNoticias";
import ListaUsuarios from "./abmUsuarios/ListaUsuarios";
import configs from '../../urlconfig';

const PaginaAdmin = (props) => {
  const [opc, setOpc] = useState("cat");
  const [loader, setLoader] = useState(false);
  const [recargarAdmin, setRecargarAdmin] = useState(true);
  const [agregarUsuariosBtn,setAgregaUsuariosBtn] = useState('');
  const authToken = sessionStorage.getItem("authtoken");

  const consultaUsuarios = async () => {
    try {
      const cabecera = {
        headers: {
          ["x-access-token"]: authToken,
        },
      };
      const consulta = await fetch(
        `${configs.urlBackend}/api/users/`,
        cabecera
      );
      const usuarios = await consulta.json();

      if (consulta.status === 403) {
        setAgregaUsuariosBtn('disabled');
        
        return;
      } else {
        setAgregaUsuariosBtn('');
        props.setListaUsuarios(usuarios);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpc = (opcion) => {
    setTimeout(() => {
      setOpc(opcion);
      setLoader(false);
    }, 1000);
  };

  const cargarOpcion = () => {
    if (loader === true) {
      return <Spinner></Spinner>;
    } else {
      if (opc === "cat") {
        return (
          <ListaCategorias
            categorias={props.listaCategorias}
            setRecargarPagina={props.setRecargarPagina}
          ></ListaCategorias>
        );
      }
      if (opc === "not") {
        return (
          <ListaNoticias
            noticias={props.listaNoticias}
            setRecargarPagina={props.setRecargarPagina}
            // consultarNoticias={props.consultarNoticias}
          ></ListaNoticias>
        );
      }
      if (opc === "users") {
        return (
          <ListaUsuarios
            listaUsuarios={props.listaUsuarios}
            setRecargarPagina={props.setRecargarPagina}
            setRecargarAdmin={setRecargarAdmin}
          ></ListaUsuarios>
        );
      }
    }
  };

  const userData = () => {
    return props.usuario.usuario;
  };

  useEffect(() => {
    consultaUsuarios();
    setRecargarAdmin(false);
  }, [recargarAdmin]);

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
          <h4 className="mr-2">
            Bienvenidos <strong>{props.usuario.usuario}</strong>! - Roles
            Activos:
          </h4>
          <h5>
            {props.usuario.role.map((item, pos) => {
              return (
                <span
                  key={pos}
                  item={item}
                  className="badge badge-primary mx-1"
                >
                  {item.name}
                </span>
              );
            })}
          </h5>
        </Row>
        <hr></hr>
        <Row className="d-flex justify-content-between">
          <div className="mr-auto my-2 col-6">
            <div variant="pills" defaultActiveKey="/admin">
              <Link>
                <Button
                  className="btn btn-info m-2"
                  onClick={() => {
                    handleOpc("cat");
                    setLoader(true);
                  }}
                >
                  Categorias
                </Button>
              </Link>
              <Link>
                <Button
                  className="btn btn-info m-2"
                  onClick={() => {
                    handleOpc("not");
                    setLoader(true);
                  }}
                >
                  Noticias
                </Button>
              </Link>
              <Link>
                <Button
                  className={`btn btn-info m-2`}
                  onClick={() => {
                    handleOpc("users");
                    setLoader(true);
                    
                  }}
                  id='btnUser'
                >
                  Usuarios
                </Button>
              </Link>
              <Link>
                <Button className="btn btn-info m-2" disabled>
                  Metricas
                </Button>
              </Link>
            </div>
          </div>
          <div className="ml-auto my-2 col-6">
            <Link to={"/noticia/nueva"} className="btn btn-success m-2">
              Agregar Noticia
            </Link>
            <Link to={"/categoria/nueva"} className="btn btn-success m-2">
              Agregar Categoria
            </Link>
            <Link to={"/usuario/nuevo"} className={`btn btn-success m-2 ${agregarUsuariosBtn}`}>
              Agregar Usuario
            </Link>
          </div>
        </Row>
        <hr></hr>
        <section className="">{cargarOpcion()}</section>
      </Container>
    </div>
  );
};

export default withRouter(PaginaAdmin);
