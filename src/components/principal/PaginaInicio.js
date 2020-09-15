import React, { Fragment } from "react";
import { Container, Carousel, Card, Button, CardImg } from "react-bootstrap";
import Logo from "../../img/publicidad.png";
import ApiHeader from './ApiHeader';

const PaginaInicio = () => {
  return (
    <Fragment>
    <ApiHeader></ApiHeader>
    <Container className="text-center">
      <hr />
      <hr className="mb-4" />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4 mb-2">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/08/26/Recortada/img_asalarich_20200826-095240_imagenes_lv_otras_fuentes_marcha-messi-1200x675-5-364-kB4F-U483089990486wkG-992x558@LaVanguardia-Web.jpg"
                alt="Noticia 1"
              />
              <Carousel.Caption>
                <h3>Noticia 1</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/04/11/15865964374752.png"
                alt="Noticia 2"
              />

              <Carousel.Caption>
                <h3>Noticia 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://saltateve.com/public/images/noticias/554-sube-el-dolar-y-aumenta-la-incertidumbre-sobre-el-bcra.jpg"
                alt="Noticia 3"
              />

              <Carousel.Caption>
                <h3>Nombre Noticia 3</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
        <div className="col-sm-12 col-md-3 mb-5">
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
      <h4 className="text-left">Deportes</h4>
      <hr />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.telam.com.ar/advf/imagenes/2019/09/5d711e2e808f4_1004x565.jpg"
            />
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
        <div className="col-sm-12 col-md-4 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.mundodeportivo.com/rf/image_medium/GODO/MD/p7/Baloncesto/Imagenes/2020/09/10/Recortada/1cd27801724b471987e13ddb38524507-kz7B-U483393786792tyH-980x554@MundoDeportivo-Web.jpg"
            />
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
        <div className="col-sm-12 col-md-4 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRxYOABrdPtoBfpSPrbnvmsKPFHhKtVg8cuA&usqp=CAU"
            />
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
        <img
          src="https://lh3.googleusercontent.com/proxy/HDKWFEKCyIfZUt6VoXWaTT1d1zv4pf49qJpVt-JD0FJD2cp1bGKHHGWM0meOkKmYP6gsnPinjroLkn32Kqx9QOsT3Nhs13wsBpEWcaoRUJjZ"
          alt="covid"
          className="w-100 mb-4"
        />
      </div>
      <h4 className="text-left">Espectaculos</h4>
      <hr />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://s.yimg.com/ny/api/res/1.2/vHVHZr275ejLHw3YgM_Hhg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/es/lanacion.com.ar/1ca4a012f76eafb4a50142fee7093ec6"
            />
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
        <div className="col-sm-12 col-md-4 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfuL3JTL20bjrFh1j-6T8heh3KiDsf9KXjVA&usqp=CAU"
            />
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
        <div className="col-sm-12 col-md-4 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcJKO8W5l_hDkx7sNjs4_lFAfjyN1-mnW1xQ&usqp=CAU"
            />
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
      <h4 className="text-left">Economia</h4>
      <hr />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-3 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5_ncUnYyPX6yIDYiLFVoBPdnK1lMCMSdlvA&usqp=CAU"
            />
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
        <div className="col-sm-12 col-md-3 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://i.ytimg.com/vi/KZjpii1YVY4/maxresdefault.jpg"
            />
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
        <div className="col-sm-12 col-md-3 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.eldiariocba.com.ar/u/fotografias/fotosnoticias/2020/8/5/26755.jpg"
            />
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
      </div>
    </Container>
    </Fragment>
  );
};

export default PaginaInicio;
