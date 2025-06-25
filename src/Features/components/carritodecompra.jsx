import React, { useState } from 'react';
import { useCart } from './CartContext'; 

export function CarritoDeCompra({ producto }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart(); 


  const countUp = () => {
    if (count < 5) setCount(count + 1);
  };

 
  const countDown = () => {
    if (count > 0) setCount(count - 1);
  };

  const agregarAlCarrito = () => {

    for (let i = 0; i < count; i++) {
      addToCart(producto);
    }
    

    setCount(0);
  };

  return (
    <div className="card my-2">
      <div className="card-header">
        <h5 className="card-title">Carrito de Compra</h5>
        {producto && (
          <small className="text-muted">{producto.title}</small>
        )}
      </div>
      <div className="card-body d-flex align-items-center gap-2">
        <button
          className="btn btn-secondary"
          onClick={countDown}
          disabled={count === 0}
        >
          -
        </button>
        <span className="fs-5">{count}</span>
        <button
          className="btn btn-primary"
          onClick={countUp}
          disabled={count === 5}
        >
          +
        </button>
      </div>
      <div className="card-footer text-center">
        <button
          className="btn btn-success"
          onClick={agregarAlCarrito}
          disabled={count === 0 || !producto}
        >
          Agregar al carrito ({count})
        </button>
        {producto && (
          <div className="mt-2">
            <small className="text-muted">
              Total: ${(producto.price * count).toFixed(2)}
            </small>
          </div>
        )}
      </div>
    </div>
  );
}