import React from 'react';
import './App.css';
import './ApiStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaInicio from './components/principal/PaginaInicio';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ApiHeader from './components/principal/ApiHeader';
import EditarNoticia from './components/abm/abmNoticias/EditarNoticia';

function App () {
    return (
        <div>
            <Header></Header>
            <ApiHeader></ApiHeader>
            <PaginaInicio></PaginaInicio>
            <Footer></Footer>
            <EditarNoticia></EditarNoticia>
            
        </div>
    )
}

export default App