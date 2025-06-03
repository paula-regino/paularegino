import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src='./public/logo.svg' alt="" className="navbar-brand me-2 img-fluid" style={{ maxHeight: '40px', width: 'auto' }}/>
        <a className="navbar-brand" href="#"></a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Buscar productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Repuestos</a>
            </li>
          </ul>
          
          {/* Barra de búsqueda (centrada) */}
          <form className="d-flex mx-auto" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Buscar..." 
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Buscar
            </button>
          </form>

          {/* Elementos a la derecha (Login y Carrito) */}
          <div className="d-flex ms-3">
            <a className="nav-link" href="#">Login</a>
            <a className="nav-link ms-3" href="#">Ver carrito</a>
          </div>
        </div>
      </div>
    </nav>
  );
}