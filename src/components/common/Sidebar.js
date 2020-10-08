import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const openSlideMenu = (e) => {
        e.preventDefault();
        console.log("abriendo menu")
        document.getElementById('menu').style.width = '250px';
        document.getElementById('content').style.marginLeft = '250px';
    }

    const closeSideMenu = (e) => {
        e.preventDefault();
        console.log("cerrando menu");
        document.getElementById('menu').style.width = '0';
        document.getElementById('content').style.marginLeft = '0';
    }

return (
    <div>
        <div id="content">
            <span className="slide">
                <a href="#" onClick={openSlideMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </span>
            <div id="menu" className="nav d-flex flex-column text-center">
                <a href="" className="close" onClick={closeSideMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </a>
                <a href="/"><FontAwesomeIcon icon={faHome} className="mr-2" />NewsPro<span className="text-primary">.</span></a>
                {
                    props.listaCategorias.map((item, pos) => {
                        if (item.nombreCategoria !== "Actualidad" && item.nombreCategoria !== "Política" &&
                            item.nombreCategoria !== "Tecnología" && item.nombreCategoria !== "Deportes") {
                            return (<Link
                                key={pos}
                                to={`/pagcategoria/${item._id}`}
                            >{item.nombreCategoria}</Link>)
                        }
                    })
                }
            </div>
        </div>
    </div>
);
};

export default Sidebar;