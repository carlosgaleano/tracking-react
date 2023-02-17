import React, { Component }  from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="btn btn-outline-primary" to="/">
                    Inicio
                </Link>
                <Link className="btn btn-outline-primary" to="/blog">
                    Despachos
                </Link>
                <Link className="btn btn-outline-primary" to="/excel">
                    Export Excel
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;