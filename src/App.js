
import React from "react";
import "./App.css";
import "./ApiStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginaInicio from "./components/principal/PaginaInicio";
import PaginaAdmin from "./components/abm/PaginaAdmin";
import Error404 from "./components/common/error404";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ApiHeader from "./components/principal/ApiHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <ApiHeader></ApiHeader>
        <PaginaInicio></PaginaInicio>
        </Route>
        <Route exact path="/admin">
            <PaginaAdmin></PaginaAdmin>
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
