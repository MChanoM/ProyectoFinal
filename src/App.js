import React, { useState, useEffect } from "react";
import "./App.css";
import "./ApiStyle.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./bootstrap.min.css"; //este el el boostrap de bootwatch
import PaginaInicio from "./components/principal/PaginaInicio";
import AgregarNoticia from "./components/abm/abmNoticias/AgregarNoticia";
import AgregarCategoria from "./components/abm/abmCategorias/AgregarCategoria";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ApiHeader from "./components/principal/ApiHeader";
import EditarNoticia from "./components/abm/abmNoticias/EditarNoticia";
import EditarCategoria from "./components/abm/abmCategorias/EditarCategoria";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaAdmin from "./components/abm/PaginaAdmin";
import Error404 from "./components/common/error404";
import Suscribirse from "./components/principal/Suscribirse";
import SuscribirsePlan1 from "./components/principal/SuscribirsePlan1";


function App() {
  const [listaNoticias, setListaNoticias] = useState([]);
  const [listaCategorias, setListaCategorias] = useState([]);
  const [recargarPagina, setRecargarPagina] = useState(true);

  useEffect(() => {
    if (recargarPagina) {
      consultarCat();
      consultarNoticias();
      setRecargarPagina(false);
    }
  }, [recargarPagina]);

  //CONSULTA LISTA CATEGORIAS
  const consultarCat = async () => {
    try {
      const consulta = await fetch("https://newsprorc.herokuapp.com/api/categorias");
      const respuesta = await consulta.json();
      setListaCategorias(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  //CONSULTA LISTA DE NOTICIAS
  const consultarNoticias = async () => {
    try {
      const consulta = await fetch("https://newsprorc.herokuapp.com/api/noticias");
      const respuesta = await consulta.json();
      setListaNoticias(respuesta);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <div className=" row justify-content-center">
        <a href="">
        <img
        src="https://media.giphy.com/media/8cd2qGwahcx6haeXsu/giphy.gif"
        alt="Publicidad"
        className="publicidadGrande">
        </img>
        </a>
      </div>
      
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <ApiHeader></ApiHeader>
          <PaginaInicio listaNoticias={listaNoticias} listaCategorias={listaCategorias}></PaginaInicio>
        </Route>
        <Route exact path="/admin">
          <PaginaAdmin
            listaCategorias={listaCategorias}
            listaNoticias={listaNoticias}
            setRecargarPagina={setRecargarPagina}
          // consultarCat={consultarCat()}
          ></PaginaAdmin>
        </Route>
        <Route exact path="/noticia/nueva">
          <AgregarNoticia></AgregarNoticia>
        </Route>
        <Route
          exact
          path="/noticia/editar/:id"
          render={(props) => {
            //Obtengo el id de la ruta
            const idNoticia = props.match.params.id;
            console.log(idNoticia);
            //Filtro el arreglo de noticias y agarro el que coincide con el id
            const noticiaSeleccionada = listaNoticias.find(
              (noticia) => noticia._id === idNoticia
            );
            console.log(noticiaSeleccionada);
            //Renderizo EditarNotica
            return (
              <EditarNoticia
                noticia={noticiaSeleccionada}
                consultarNoticias={consultarNoticias}
              ></EditarNoticia>
            );
          }}
        ></Route>
        <Route
          exact
          path="/categoria/editar/:id"
          render={(props) => {
            //Obtengo el id de la ruta
            const idCategoria = props.match.params.id;
            //Filtro el arreglo de categorias y agarro el que coincide con el id
            const categoriaSeleccionada = listaCategorias.find(
              (categoria) => categoria.id === idCategoria
            );
            console.log(categoriaSeleccionada);
            //Renderizo EditarCategoria
            return (
              <EditarCategoria
                categoria={categoriaSeleccionada}
                consultarCat={consultarCat}
              ></EditarCategoria>
            );
          }}
        ></Route>
        <Route exact path="/categoria/nueva">
          <AgregarCategoria></AgregarCategoria>
        </Route>
        <Route exact path="/suscribirse">
          <Suscribirse></Suscribirse>
        </Route>
        <Route exact path="/suscribirse/plan1">
          <SuscribirsePlan1></SuscribirsePlan1>
        </Route>
        <Route exact path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
