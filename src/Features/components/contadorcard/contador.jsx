import React, { useState } from 'react';
import { useCart } from '../../cart/hooks/Cartcontext';

export function Contadorcard({ producto }) {
  // Estado para la cantidad seleccionada
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);
  const { agregarProducto } = useCart();

  // Limites de cantidad
  const maxCantidad = 5;
  const minCantidad = 0;

  // Aumentar cantidad
  const aumentar = () => {
    if (cantidad < maxCantidad) setCantidad(cantidad + 1);
  };

  // Disminuir cantidad
  const disminuir = () => {
    if (cantidad > minCantidad) setCantidad(cantidad - 1);
  };

  // Agregar al carrito y mostrar feedback
  const agregarAlCarrito = () => {
    if (cantidad > 0) {
      // agregarProducto({ ...producto, quantity: cantidad });
      setAgregado(true);
      setTimeout(() => {
        setAgregado(false);
        setCantidad(1);
      }, 1000);
    }
  };

  return (
    <div className="card my-2 shadow-sm">
      <div className="card-header bg-dark text-white">
        <h5 className="card-title mb-0">
          <i className="bi bi-speedometer2 me-2"></i>
          Selecciona cantidad
        </h5>
      </div>
      <div className="card-body d-flex align-items-center justify-content-center gap-3">
        <button
          className="btn btn-outline-danger"
          onClick={disminuir}
          disabled={cantidad === minCantidad}
        >
          <i className="bi bi-dash"></i>
        </button>
        <span className="fs-4 fw-bold">{cantidad}</span>
        <button
          className="btn btn-outline-primary"
          onClick={aumentar}
          disabled={cantidad === maxCantidad}
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <div className="card-footer text-center bg-light">
        <button
          className={`btn w-100 ${agregado ? 'btn-success' : 'btn-dark'}`}
          onClick={agregarAlCarrito}
          disabled={agregado}
        >
          {agregado ? (
            <>
              <i className="bi bi-check-circle"></i> ¡Agregado!
            </>
          ) : (
            <>
              <i className="bi bi-cart-plus"></i> Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
}