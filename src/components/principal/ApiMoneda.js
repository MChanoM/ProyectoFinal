import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";


const ApiMoneda = (props) => {
  const [dataMoneda, setDataMoneda] = useState({});

  const consultarApi = async () => {
    console.log("cargando datos de la moneda");
    const apiKey = "a118443cd2201aab4bc8";
    const querrySet = "USD_ARS,EUR_ARS";
    const urlApi = `https://free.currconv.com/api/v7/convert?q=${querrySet}&compact=ultra&apiKey=${apiKey}`;

    if (props.test === false) {
      try {
        const respuesta = await fetch(urlApi);
        // console.log(respuesta);
        const resultado = await respuesta.json();
        resultado.EUR_ARS = parseFloat(resultado.EUR_ARS).toFixed(2);
        resultado.USD_ARS = parseFloat(resultado.USD_ARS).toFixed(2);
        console.log(resultado);
        setDataMoneda(resultado);
      } catch (error) {
        console.log(error);
      }
    } else {
      let resultado = { EUR_ARS: "88.00", USD_ARS: "74.00" };
      setDataMoneda(resultado);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Row className="d-flex justify-content-start align-items-center mt-3">
      <div className="d-flex align-items-center euro">
        <p className="desc">EURO</p>
       <p className="moneda"> {dataMoneda.EUR_ARS}</p>
      </div>
      <div className="d-flex align-items-center">
      <p className="desc">DOLAR</p>
        <p className="moneda">{dataMoneda.USD_ARS}</p>
      </div>
    </Row>
  );
};

export default ApiMoneda;
