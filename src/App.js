import React from "react";
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
// import AgregarNoticia from "./components/abm/abmNoticias/AgregarNoticia";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <ApiHeader></ApiHeader>
          <PaginaInicio></PaginaInicio>
          <EditarNoticia></EditarNoticia>
        </Route>
        <Route exact path="/admin">
          <PaginaAdmin></PaginaAdmin>
        </Route>
        <Route exact path="*">
          <Error404></Error404>
        </Route>
        <Route exact path="/noticia/editar">
          <EditarNoticia></EditarNoticia>
        </Route>
        <Route exact path="/categoria/editar">
          <EditarCategoria></EditarCategoria>
        </Route>
        <Route exact path="/categoria/nueva">
          <AgregarCategoria></AgregarCategoria>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
