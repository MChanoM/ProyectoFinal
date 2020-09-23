import React from "react";
import { Container, Carousel, Card, Button, CardImg } from "react-bootstrap";
import Logo from "../../img/publicidad.png";
import CardCategoria from "./CardCategoria";

const PaginaInicio = (props) => {
  return (
    <Container className="text-center my-4">
      <h3 className="text-left">Último Momento</h3>
      <div className="row">
        <div className="col-12 mb-2">
          <div className="row">
            <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1 border-right">
              <Carousel>
                {props.listaNoticias.map((item, pos) => {
                  if (item.noticiaDestacada === "on") {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={item.imagen}
                          alt="imagen noticia"
                          key={pos}
                        />
                        <Carousel.Caption>
                          <h4>{item.tituloNoticia}</h4>
                          <p>
                            {/* Nulla vitae elit libero, a pharetra augue mollis interdum. */}
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  }
                })}
              </Carousel>
            </div>
            <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
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
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 mb-5">
          <a href="">
            <img src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"></img>
          </a>
        </div>
        <div className="col-sm-12 col-md-3 mb-5 ">
          <a href="">
            <img src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"></img>
          </a>
        </div>
        <div className="col-sm-12 col-md-3 mb-5">
          <a href="">
            <img src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"></img>
          </a>
        </div>
      </div>

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
          <Button variant="link">
            <CardImg
              src={Logo}
              width="110"
              height="500"
              className="d-inline-block align-top"
              alt="Anuncio"
            />
          </Button>
        </Card>
      </div>

      <hr className="mb-4" />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="d-none d-md-block ">
        <div className="row justify-content-center">
          <a href="">
            <img
              src="https://tpc.googlesyndication.com/simgad/10495352078616386191"
              className="publicidadLarga"
            ></img>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default PaginaInicio;
