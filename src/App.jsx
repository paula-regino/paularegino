import React from 'react';
import { Navbar } from './components/navbar';
import { Carrusel } from './components/carrusel';
import { Home } from './components/home';
import { Footer } from './components/footer'
import { Informacion } from './cards/informacion'; // <-- Agrega esta línea
import { Formulario } from './compoformulario/formulario'; // <-- Agrega esta línea

function App() {
  return (
    <div>
      <Navbar />
      <Carrusel />
      <Home />
      <Formulario /> 
      <Informacion /> {/* <-- Agrega esta línea */}
      <Footer />

    </div>
  );
}

export default App;