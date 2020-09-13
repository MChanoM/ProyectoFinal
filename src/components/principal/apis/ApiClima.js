import React, { useState, useEffect, Fragment } from "react";
import { Image, Row, Col } from "react-bootstrap";

const ApiClima = (props) => {
  const [dataClima, setDataClima] = useState({});

  const consultarApi = async () => {
    // console.log("cargando datos del clima");
    const apiKey = "cbfc2a6863dc350ddf2cfab27a09762d";
    const pais = "AR";
    const ciudad = "San Miguel de Tucuman";
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}&units=metric`;

    if (props.test === false) {
      try {
        //response
        const respuesta = await fetch(urlApi);
        const resultado = await respuesta.json();
        // console.log(resultado);
        setDataClima(resultado);
      } catch (error) {
        console.log(error);
      }
    } else {
      let resultado = {
        name: "San Miguel de Tucuman",
        main: { temp: 15, temp_max: 10, temp_min: 20, feels_like: 16 },
        weather: [{ icon: "04d" }],
      };
      setDataClima(resultado);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Fragment>
      <div className="mr-3 apiClimaMin">
        <Row className="d-flex justify-content-end">
          <p className="ciudadClima">{dataClima.name}</p>
        </Row>
        <Row className="d-flex align-items-center justify-content-end">
          <Image
            className="logoClima"
            src={`http://openweathermap.org/img/wn/${
              dataClima.main === undefined ? "" : dataClima.weather[0].icon
            }@2x.png`}
            alt="icon-clima"
          />
          <h5 className="">
            {dataClima.main === undefined ? "" : dataClima.main.temp}°C
          </h5>
        </Row>
      </div>

      <div className="apiClimaMax">
        <Row>
          <Col className="d-flex justify-content-end">
            <Image
              className="logoClima"
              src={`http://openweathermap.org/img/wn/${
                dataClima.main === undefined ? "" : dataClima.weather[0].icon
              }@2x.png`}
              alt="icon-clima"
            />
          </Col>
          <Col md={"auto"}>
            <Row className="d-flex justify-content-start">
              <p className="nombreCiudad">{dataClima.name}</p>
            </Row>
            <Row className="d-flex justify-content-center mr-5">
              <div className="d-flex justify-content-between align-items-baseline extrasClima">
                <h5 className="mr-2 tempClima">
                  {dataClima.main === undefined ? "" : dataClima.main.temp}°C
                </h5>
                <p className="mr-2 sensTerm">
                  ST{" "}
                  {dataClima.main === undefined
                    ? ""
                    : dataClima.main.feels_like}
                  °C
                </p>
                <small>
                  <p className="mr-2">
                    Max{" "}
                    {dataClima.main === undefined
                      ? ""
                      : dataClima.main.temp_max}
                    °C
                  </p>
                </small>
                <small>
                  <p className="">
                    Min{" "}
                    {dataClima.main === undefined
                      ? ""
                      : dataClima.main.temp_min}
                    °C
                  </p>
                </small>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default ApiClima;
