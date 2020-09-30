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
import PaginaNoticia from "./components/principal/PaginaNoticia";
import PaginaCategoria from "./components/principal/PaginaCategoria";
import AltaUsuario from "./components/abm/abmUsuarios/AltaUsuario";
import EditarUsuario from "./components/abm/abmUsuarios/EditarUsuario";

function App() {
  const [listaNoticias, setListaNoticias] = useState([]);
  const [listaCategorias, setListaCategorias] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [recargarPagina, setRecargarPagina] = useState(true);
  const [loginAdmin, setLoginAdmin] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [btnIngresar, setBtnIngresar] = useState("Ingresar");
  const authToken = sessionStorage.getItem("authtoken");

  useEffect(() => {
    if (recargarPagina) {
      consultarCat();
      consultarNoticias();
      setRecargarPagina(false);
      consultarUsuario();
    }
  }, [recargarPagina]);

  //CONSULTA LISTA CATEGORIAS
  const consultarCat = async () => {
    try {
      const consulta = await fetch(
        "https://newsprorc.herokuapp.com/api/categorias"
      );
      const respuesta = await consulta.json();
      setListaCategorias(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  //CONSULTA LISTA DE NOTICIAS
  const consultarNoticias = async () => {
    try {
      const cabecera = {};
      const consulta = await fetch(
        "https://newsprorc.herokuapp.com/api/noticias",
        cabecera
      );
      const respuesta = await consulta.json();
      setListaNoticias(respuesta);
      // console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  const consultarUsuario = async () => {
    try {
      const cabecera = {
        headers: {
          ["x-access-token"]: authToken,
        },
      };
      const consulta = await fetch(
        "http://localhost:4000/api/users/me",
        cabecera
      );
      const usuarioLogueado = await consulta.json();

      //verifico que esté activo el usuario
      if (usuarioLogueado.userActive) {
        //verifico que esté iniciada la sesion
        if (usuarioLogueado.sessionState) {
          setUsuario(usuarioLogueado);
          setLoginAdmin(true);
          setBtnIngresar("Cerrar Sesion");

          // consulta = await fetch("http://localhost:4000/api/users/me/roles",cabecera);
          // const rolesUsuario = consulta.json();
          // console.log(rolesUsuario);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <div className="d-none d-md-block ">
        <div className="text-center ">
          <a href="">
            <img
              src="https://media.giphy.com/media/8cd2qGwahcx6haeXsu/giphy.gif"
              alt="Publicidad"
              // className="w-100"
            ></img>
          </a>
        </div>
      </div>

      <Header
        btnIngresar={btnIngresar}
        setBtnIngresar={setBtnIngresar}
        setLoginAdmin={setLoginAdmin}
        loginAdmin={loginAdmin}
        listaCategorias={listaCategorias}
        usuario={usuario}
        setUsuario={setUsuario}
        setRecargarPagina={setRecargarPagina}
      ></Header>
      <Switch>
        <Route exact path="/">
          <ApiHeader></ApiHeader>
          <PaginaInicio
            listaNoticias={listaNoticias}
            listaCategorias={listaCategorias}
          ></PaginaInicio>
        </Route>
        <Route
          exact
          path="/pagnoticia/:id"
          render={(props) => {
            // obtengo el nombre de la ruta
            const idNoticia = props.match.params.id;
            //Filtro el arreglo de noticias y agarro el que coincide con el id
            const noticiaSeleccionada = listaNoticias.find(
              (noticia) => noticia._id === idNoticia
            );
            return (
              <PaginaNoticia
                noticia={noticiaSeleccionada}
                listaNoticias={listaNoticias}
                consultarCat={consultarCat}
              ></PaginaNoticia>
            );
          }}
        ></Route>
        <Route
          exact
          path="/pagcategoria/:id"
          render={(props) => {
            // obtengo el id de la ruta
            const idCategoria = props.match.params.id;
            const categoriaSeleccionada = listaCategorias.find(
              (categoria) => categoria._id === idCategoria
            );
            return (
              <PaginaCategoria
                listaNoticias={listaNoticias}
                categoria={categoriaSeleccionada}
                listaCategorias={listaCategorias}
                consultarCat={consultarCat}
              ></PaginaCategoria>
            );
          }}
        ></Route>
        <Route
          exact
          path="/admin"
          render={() => {
            if (loginAdmin === true) {
              return (
                <PaginaAdmin
                  listaCategorias={listaCategorias}
                  listaNoticias={listaNoticias}
                  setRecargarPagina={setRecargarPagina}
                  setListaUsuarios={setListaUsuarios}
                  listaUsuarios={listaUsuarios}
                  usuario={usuario}
                  // consultarCat={consultarCat}
                  // consultarNoticias={consultarNoticias}
                ></PaginaAdmin>
              );
            } else {
              return <Error404></Error404>;
            }
          }}
        ></Route>
        <Route exact path="/usuario/nuevo">
          <AltaUsuario></AltaUsuario>
        </Route>
        <Route
          exact
          path="/usuario/editar/:id"
          render={(props) => {
            const idUsuario = props.match.params.id;

            const usuarioSeleccionado = listaUsuarios.find(
              (usu) => usu._id === idUsuario
            );
            return (
              <EditarUsuario
                usuarioSeleccionado={usuarioSeleccionado}
              ></EditarUsuario>
            );
          }}
        ></Route>
        <Route exact path="/noticia/nueva">
          <AgregarNoticia
            listaCategorias={listaCategorias}
            consultarNoticias={consultarNoticias}
          ></AgregarNoticia>
        </Route>
        <Route
          exact
          path="/noticia/editar/:id"
          render={(props) => {
            //Obtengo el id de la ruta
            const idNoticia = props.match.params.id;
            // console.log(idNoticia);
            //Filtro el arreglo de noticias y agarro el que coincide con el id
            const noticiaSeleccionada = listaNoticias.find(
              (noticia) => noticia._id === idNoticia
            );
            // console.log(noticiaSeleccionada);
            //Renderizo EditarNotica
            return (
              <EditarNoticia
                noticia={noticiaSeleccionada}
                consultarNoticias={consultarNoticias}
                listaCategorias={listaCategorias}
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
              (categoria) => categoria._id === idCategoria
            );
            // console.log(categoriaSeleccionada);
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
          <AgregarCategoria
            listaCategorias={listaCategorias}
            consultarCat={consultarCat}
          ></AgregarCategoria>
        </Route>
        <Route exact path="/categoria">
          <PaginaCategoria listaCategorias={listaCategorias}></PaginaCategoria>
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
