import React from "react";
import { Container, Card, CardImg } from "react-bootstrap";
import Logo from "../../img/publicidad.png";
import CardCategoria from "./CardCategoria";
import NoticiasDestacadas from "../principal/NoticiasDestacadas";

const PaginaInicio = (props) => {
  return (
    <section className="text-center my-4">
      <h2 className="text-left mt-4 display-4">Último Momento</h2>
      <NoticiasDestacadas
        listaNoticias={props.listaNoticias}
      ></NoticiasDestacadas>

      <Container>
        {/* <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
              <div className="row">
                {props.listaNoticias.map((item, pos) => {
                  if (pos < 2) {
                    return (
                      <div className="col-6 pb-1 pt-0 pr-1">
                        <Card className="text-white">
                          <Card.Img
                            src={item.imagen}
                            alt="imagen de noticia"
                            key={pos}
                          />
                          <Card.ImgOverlay>
                            <a
                              className="p-1 badge badge-primary rounded-0"
                              href=""
                            >
                              {item.categoria}
                            </a>
                            <Card.Title className="align-self-end">
                              {item.tituloNoticia}
                            </Card.Title>
                          </Card.ImgOverlay>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
              {props.listaNoticias.map((item, pos) => {
                if (pos < 1) {
                  return (
                    <Card className="text-white">
                      <Card.Img
                        src={item.imagen}
                        alt="imagen de noticia"
                        key={pos}
                        className="h-50"
                      />
                      <Card.ImgOverlay>
                        <a
                          className="p-1 badge badge-primary rounded-0"
                          href=""
                        >
                          {item.categoria}
                        </a>
                        <Card.Title className="align-self-end">
                          {item.tituloNoticia}
                        </Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  );
                }
              })}
            </div> */}

        <div className="d-flex justify-content-between my-4">
          <div className="col-sm-12 col-md-4 mb-5">
            <a href="">
              <img
                className="w-100"
                src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"
              ></img>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 mb-5 ">
            <a href="">
              <img
                className="w-100"
                src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"
              ></img>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 mb-5">
            <a href="">
              <img
                className="w-100"
                src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"
              ></img>
            </a>
          </div>
        </div>
        {/* </div> */}

        {props.listaCategorias.map((item, pos) => {
          return (
            <CardCategoria
              item={item}
              key={pos}
              listaNoticias={props.listaNoticias}
            ></CardCategoria>
          );
        })}

        <div className="col-sm-12 col-md-3 mb-3">
          <Card>
            <CardImg
              src={Logo}
              className="d-inline-block align-top"
              alt="Anuncio"
            />
          </Card>
        </div>

        <hr className="mb-4" />
        <div className="d-none d-md-block ">
          <div className="text-center">
            <a href="">
              <img
                src="https://tpc.googlesyndication.com/simgad/10495352078616386191"
                className="publicidadLarga"
              ></img>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaginaInicio;
