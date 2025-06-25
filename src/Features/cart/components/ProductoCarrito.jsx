import React from 'react';
import { useCart } from '../hooks/Cartcontext';

export function ProductoCarrito({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="d-flex align-items-center mb-2 border-bottom pb-2">
      <img src={item.image} alt={item.title} style={{ width: 50, height: 50, objectFit: 'cover', marginRight: 10 }} />
      <div className="flex-grow-1">
        <div style={{ fontWeight: 'bold' }}>{item.title}</div>
        <div>Cantidad: {item.quantity}</div>
        <div>Precio: ${item.price}</div>
        <div>Total: ${(item.price * item.quantity).toFixed(2)}</div>
      </div>
      <div className="d-flex flex-column align-items-end ms-2">
        <button className="btn btn-sm btn-outline-secondary mb-1" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        <button className="btn btn-sm btn-outline-secondary mb-1" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onRemove(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}
