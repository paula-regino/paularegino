import './Shared/styles/estilocarrito.css'

import React from "react";


import { Navbar } from "./Features/components/navbar";
import { Carrusel } from "./Features/components/carrusel";
import { Home } from "./Features/components/home";
import { Footer } from "./Features/components/footer";
import { Informacion } from "./Features/components/cards/informacion";
import { Formulario } from "./Features/components/compoformulario/formulario";
import { Cart } from "./Features/cart/components/cart";
import { CartProvider } from './Features/cart/hooks/Cartcontext';

export function LandingPage() {
  return (
    <CartProvider>
      <Navbar />
      <div className="container my-4">
        <Carrusel />
        <Informacion />
        <Home />
        <Formulario />
        <Footer />
      </div>
      <Cart />
    </CartProvider>
  );
}

export default LandingPage;