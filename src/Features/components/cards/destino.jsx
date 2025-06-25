import React from 'react';
import { Contadorcard } from '../contadorcard/contador';
import { useCart } from '../../cart/hooks/Cartcontext';

export function Destino({ moto, descripcion, precio, cilindrage, peso, velocidad }) {
  const { addToCart } = useCart();

  // Estructura el producto para el carrito
  const producto = {
    id: moto.id,
    title: moto.title,
    price: precio,
    image: moto.image
  };

  return (
    <div className="card mb-4">
      <div className="card-header text-center">
        <h5 className="card-title">{moto.title}</h5>
      </div>
      <img src={moto.image} alt={moto.title} className="card-img-top img-fluid" />
      <div className="card-body">
        <p className="card-text">{descripcion}</p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item"><strong>Precio:</strong> {precio}</li>
          <li className="list-group-item"><strong>Cilindraje:</strong> {cilindrage}</li>
          <li className="list-group-item"><strong>Peso:</strong> {peso}</li>
          <li className="list-group-item"><strong>Velocidad:</strong> {velocidad}</li>
        </ul>
        <Contadorcard />
        <button className="btn btn-primary w-100 mb-2" onClick={() => addToCart(producto)}>
          Agregar al carrito
        </button>
        <a href="#" className="card-link">Más información...</a>
      </div>
    </div>
  );
}

// Nota: Debes tener implementada la función addToCart en tu contexto. Si no existe, puedo ayudarte a agregarla.