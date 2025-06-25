import React from 'react';
import { useCart } from '../hooks/Cartcontext';

export function CartButton() {
    const { cantidadTotal, mostrarOcultarCarrito } = useCarrito();

    return (
        <button 
            className="btn btn-outline-light position-relative me-3"
            onClick={mostrarOcultarCarrito}
        >
            <i className="bi bi-cart3"></i>
            {/* Badge con cantidad (solo si hay productos) */}
            {cantidadTotal > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cantidadTotal}
                    <span className="visually-hidden">productos en el carrito</span>
                </span>
            )}
        </button>
    );
}