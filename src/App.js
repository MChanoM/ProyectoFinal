import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App () {
    return (
        <div>
            <Header></Header>
            <Footer></Footer>
        </div>
    )
}

export default App