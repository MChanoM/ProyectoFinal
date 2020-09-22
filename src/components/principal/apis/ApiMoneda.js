import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const ApiMoneda = (props) => {
  const [dataMoneda, setDataMoneda] = useState({});

  const consultarApi = async () => {
    const apiKeyUno = "a118443cd2201aab4bc8";
    const querrySetUno = "USD_ARS,EUR_ARS";
    const urlApiUno = `https://free.currconv.com/api/v7/convert?q=${querrySetUno}&compact=ultra&apiKey=${apiKeyUno}`;

    const apiKeyDos = "b73aa3245e401e85bb55";
    const urlApiDos = `https://free.currconv.com/api/v7/convert?q=BTC_ARS&compact=ultra&apiKey=${apiKeyDos}`;

    if (props.test === false) {
      try {
        // console.log("cargando datos de la moneda");
        const respuesta = await fetch(urlApiUno);
        // console.log(respuesta);
        const resultado = await respuesta.json();
        resultado.EUR_ARS = parseFloat(resultado.EUR_ARS).toFixed(2);
        resultado.USD_ARS = parseFloat(resultado.USD_ARS).toFixed(2);

        const respuestaDos = await fetch(urlApiDos);
        const resultadoDos = await respuestaDos.json();
        resultado.BTC_ARS = parseFloat(resultadoDos.BTC_ARS).toFixed(0);

        // console.log(resultado);
        setDataMoneda(resultado);
      } catch (error) {
        console.log(error);
      }
    } else {
      let resultado = { EUR_ARS: "88.00", USD_ARS: "74.00", BTC_ARS: "789000" };
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
      <div className="d-flex align-items-center dolar">
        <p className="desc">DOLAR</p>
        <p className="moneda">{dataMoneda.USD_ARS}</p>
      </div>
      <div className="d-flex align-items-center dolar">
        <p className="descBtc">BTC</p>
        <p className="moneda btc">{dataMoneda.BTC_ARS}</p>
      </div>
    </Row>
  );
};

export default ApiMoneda;
