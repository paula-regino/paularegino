import React from 'react';
import { Navbar } from './components/navbar';
import { Carrusel } from './components/carrusel';
import { Home } from './components/home';
import { Footer } from './components/footer'
import { Informacion } from './cards/informacion'; // <-- Agrega esta línea

function App() {
  return (
    <div>
      <Navbar />
      <Carrusel />
      <Home />
      <Informacion /> {/* <-- Agrega esta línea */}
      <Footer />
    </div>
  );
}

export default App;