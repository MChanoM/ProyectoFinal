import React from 'react';
import './App.css';
import './ApiStyle.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'; //este el el boostrap de bootwatch
import PaginaInicio from './components/principal/PaginaInicio';
import AgregarNoticia from './components/abm/abmNoticias/AgregarNoticia';
import AgregarCategoria from './components/abm/abmCategorias/AgregarCategoria';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ApiHeader from './components/principal/ApiHeader';
import EditarNoticia from './components/abm/abmNoticias/EditarNoticia';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App () {
    return (
        <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <PaginaInicio></PaginaInicio>
        </Route>
        <Route exact path="/noticia/nueva">
          <AgregarNoticia
          ></AgregarNoticia>
        </Route>
        <Route exact path="/noticia/editar">
        <EditarNoticia></EditarNoticia>
        </Route>
        <Route exact path="/categoria/nueva">
          <AgregarCategoria></AgregarCategoria>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    );
}

export default App