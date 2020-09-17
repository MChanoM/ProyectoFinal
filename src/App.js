import React from "react";
import "./App.css";
import "./ApiStyle.css";
import "./bootstrap.min.css";
import PaginaInicio from "./components/principal/PaginaInicio";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ApiHeader from "./components/principal/ApiHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Suscribirse from "./components/principal/Suscribirse";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <ApiHeader></ApiHeader>
            <PaginaInicio></PaginaInicio>
          </Route>
          <Route exact path="/suscribirse">
            <Suscribirse></Suscribirse>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
