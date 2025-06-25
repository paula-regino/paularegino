import React from 'react';
import { useCart } from '../hooks/Cartcontext';
import { ProductoCarrito } from './ProductoCarrito';

export function Cart(props) {
    const { 
        items, 
        isOpen, 
        total, 
        itemCount,
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        toggleCart,
        cartRef 
    } = useCart(); // <-- Cambia aquí si tu hook se llama useCarrito

    // Si el carrito está cerrado, no renderizar nada
    if (!isOpen) return null;

    return (
        <>
            {/* Overlay de fondo */}
            <div className="cart-overlay" style={overlayStyles}>
                <div className="cart-sidebar" ref={cartRef} style={sidebarStyles}>
                    {/* 📝 Header del carrito */}
                    <div className="cart-header" style={headerStyles}>
                        <h3 style={titleStyles}>
                            <span style={iconStyles}>🛒</span>
                            Carrito ({itemCount})
                        </h3>
                        <button 
                            className="btn btn-outline-secondary btn-sm"
                            onClick={toggleCart}
                            style={closeButtonStyles}
                        >
                            ✕
                        </button>
                    </div>

                    {/* 📦 Contenido del carrito */}
                    <div className="cart-content" style={contentStyles}>
                        {items.length === 0 ? (
                            // Estado vacío
                            <div className="empty-cart" style={emptyCartStyles}>
                                <div style={emptyIconStyles}>🛒</div>
                                <p style={emptyTextStyles}>Tu carrito está vacío</p>
                            </div>
                        ) : (
                            <>
                                {/* Lista de productos */}
                                <div className="cart-items" style={itemsContainerStyles}>
                                    {items.map(item => (
                                        <ProductoCarrito
                                            key={item.id}
                                            item={item}
                                            onUpdateQuantity={updateQuantity}
                                            onRemove={removeFromCart}
                                        />
                                    ))}
                                </div>

                                {/* Footer con total y acciones */}
                                <div className="cart-footer" style={footerStyles}>
                                    <div className="cart-total" style={totalStyles}>
                                        <h4>Total: ${total}</h4>
                                    </div>
                                    
                                    <div className="cart-actions" style={actionsStyles}>
                                        <button 
                                            className="btn btn-outline-danger btn-sm me-2"
                                            onClick={clearCart}
                                            style={clearButtonStyles}
                                        >
                                            🗑️ Vaciar
                                        </button>
                                        <button 
                                            className="btn btn-primary"
                                            style={buyButtonStyles}
                                        >
                                            💳 Comprar
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

// Estilos básicos para evitar errores de variables no definidas
const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.4)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'flex-end',
};
const sidebarStyles = {
  width: '350px',
  background: '#fff',
  height: '100%',
  boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
  padding: '1rem',
  overflowY: 'auto',
};
const headerStyles = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', marginBottom: 10 };
const titleStyles = { fontWeight: 'bold', fontSize: 22 };
const iconStyles = { marginRight: 8 };
const closeButtonStyles = { border: 'none', background: 'none', fontSize: 22, cursor: 'pointer' };
const contentStyles = { minHeight: 200 };
const emptyCartStyles = { textAlign: 'center', color: '#888', marginTop: 40 };
const emptyIconStyles = { fontSize: 48, marginBottom: 10 };
const emptyTextStyles = { fontSize: 18 };
const itemsContainerStyles = { marginBottom: 20 };
const footerStyles = { borderTop: '1px solid #eee', paddingTop: 10 };
const totalStyles = { fontWeight: 'bold', fontSize: 20 };
const actionsStyles = { display: 'flex', justifyContent: 'space-between', marginTop: 10 };
const clearButtonStyles = { fontSize: 16 };
const buyButtonStyles = { fontSize: 16 };