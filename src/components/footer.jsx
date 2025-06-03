import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export function Footer() {
  return (
    <footer className="bg-body-tertiary mt-5 py-4 border-top">
      <div className="container-fluid">
        <div className="row">
          {/* Sección 1: Logo y descripción */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold">VoltajeXtreme</h5>
            <p className="text-muted">
              Encuentra repuestos y accesorios para tu vehículo con envíos rápidos y garantía.
            </p>
          </div>

          {/* Sección 2: Enlaces rápidos (como el navbar) */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Productos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Buscar productos</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Accessories</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Repuestos</a></li>
            </ul>
          </div>

          {/* Sección 3: Contacto */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold">Contacto</h5>
            <ul className="list-unstyled">
              <li className="text-muted">Email: info@VoltajeXtreme.com</li>
              <li className="text-muted">Teléfono: +57 000 000 0000</li>
            </ul>
          </div>

          {/* Sección 4: Redes sociales o acciones (como el navbar) */}
          <div className="col-md-3">
            <h5 className="fw-bold">Síguenos</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none text-muted">Facebook</a>
              <a href="#" className="text-decoration-none text-muted">Instagram</a>
              <a href="#" className="text-decoration-none text-muted">Twitter</a>
            </div>
            {/* Botón de "Login" para consistencia con navbar */}
            <button className="btn btn-outline-primary mt-3">Login</button>
          </div>
        </div>

        {/* Copyright (alineado con el navbar) */}
        <div className="text-center pt-3 text-muted">
          <small>© 2023 VoltajeXtreme. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}