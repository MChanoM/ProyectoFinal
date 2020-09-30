import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class NoticiasDestacadas extends Component {
  render(props) {
    const settings = {
    //   dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const listaNoticia = this.props.listaNoticias;
    return (
      <div className="my-3">
        <Slider {...settings}>
          {listaNoticia.map((item, pos) => {
            if (item.noticiaDestacada === "on") {
              return (
                <div>
                  <img
                    className="w-100 imagen"
                    src={item.imagen}
                    alt="imagen noticia"
                    key={pos}
                  />
                  <p className="tituloNoticia text-left fuente">{item.tituloNoticia}</p>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    );
  }
}

export default NoticiasDestacadas;
