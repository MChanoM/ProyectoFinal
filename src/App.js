import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaInicio from './components/principal/PaginaInicio';
import AgregarNoticia from './components/abm/abmNoticias/AgregarNoticia';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
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
      </Switch>
      <Footer></Footer>
    </Router>
    );
}

export default App