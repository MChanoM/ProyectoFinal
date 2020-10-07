import React from "react";
import "../../App.css";
import { Container, Card, CardImg } from "react-bootstrap";
import Logo from "../../img/publicidad.png";
import Covid from "../../img/covid-alto.png";
import CardCategoria from "./CardCategoria";
import NoticiasDestacadas from "../principal/NoticiasDestacadas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const PaginaInicio = (props) => {
  return (
    <section className="text-center my-4">
      <h2 className="text-left mt-4 display-4">Último Momento</h2>
      <NoticiasDestacadas
        listaNoticias={props.listaNoticias}
      ></NoticiasDestacadas>

      <Container>
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

        {/* Publicidad */}
        {/* <div className="col-sm-12 col-md-3 mb-5">
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
        </div> */}

        {/* Seccion de Categorias */}
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                {props.listaCategorias.map((item, pos) => {
                  if (pos >= 0 && pos <= 3) {
                    return (
                      <CardCategoria
                        item={item}
                        key={pos}
                        listaNoticias={props.listaNoticias}
                      ></CardCategoria>
                    );
                  }
                })}
              </div>
              <div className="col-sm-12 col-md-6">
                {props.listaCategorias.map((item, pos) => {
                  if (pos >= 5 && pos <= 9) {
                    return (
                      <CardCategoria
                        item={item}
                        key={pos}
                        listaNoticias={props.listaNoticias}
                      ></CardCategoria>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          {/* Publicidad */}
          <div className="col-md-4 d-none d-md-block">
            <Card>
              <CardImg
                src={Logo}
                className="d-inline-block align-top"
                alt="Anuncio"
              />
            </Card>
            <hr />

            {/* redes sociales */}
            <div className="widget social-widget">
              <div className="widget-title">
                <h2 className="text-muted">Conectate con nosotros</h2>
              </div>
              <ul>
                <li><a href="http://www.facebook.com" target="_blank"className="facebookw d-flex flex-column align-items-center"><br />
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="3x"
                    className="m-2"
                  />
                  <span>Facebook</span></a></li>
                <li><a href="http://www.twitter.com" target="_blank" className="twitterw d-flex flex-column align-items-center"><br />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="3x"
                    className="m-2"
                  />
                  <span>Twitter</span></a></li>
                <li><a href="http://www.instagram.com" target="_blank"className="instagramw d-flex flex-column align-items-center"><br />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="3x"
                    className="m-2"
                  />
                  <span>Instagram</span></a></li>
                <li><a href="http://www.youtube.com" target="_blank"className="youtubew d-flex flex-column align-items-center"><br />
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="3x"
                    className="m-2"
                />
                  <span>Youtube</span></a></li>
              </ul>
            </div>
            <hr/>
            <img src={Covid} alt="imagen de covid" className="w-100"/>
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
    </section>
  );
};

export default PaginaInicio;
