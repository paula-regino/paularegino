import React from "react";
import logo from '../../../assets/images/icon.png';
import { BotonCarrito } from '../../components/CartButton'; // Ajusta la ruta si es necesario
import "../../../shared/styles/estiloLanding.css";

export function Header() {
    return (
        <header className="bg-color text-white" id="inicio">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="SportStyle logo" className="logo" /> 
                        SportStyle
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
                        </ul>
                        {/* 🛒 Tu botón personalizado del carrito */}
                        <BotonCarrito />
                    </div>
                </div>
            </nav>
        </header>
    );
}