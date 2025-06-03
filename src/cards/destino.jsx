import React from 'react';
import { Contadorcard } from '../contadorcard/contador';

// Si la imagen viene como nombre de archivo, puedes importarla así:
// import xtz250negra from '../assets/xtz250negra.webp';

export function Destino({ moto, title, descripcion, precio, cilindrage, peso, velocidad, image }) {
    // Si 'image' es solo el nombre del archivo, construye la ruta:
    // const imageUrl = require(`../assets/${image}`); // Solo para Webpack, NO recomendado en Vite
    // En Vite, lo ideal es importar las imágenes y pasar la variable importada como prop

    return (
        <div className='col'>
            <img src={image} alt={title} className="img-fluid mb-3" />
            <div className="card-body">
                <h3>{title}</h3>
                <p>{descripcion}</p>
                <ul>
                    <li>Precio: {precio}</li>
                    <li>Cilindraje: {cilindrage}</li>
                    <li>Peso: {peso}</li>
                    <li>Velocidad: {velocidad}</li>
                </ul>
                <Contadorcard />
            </div>
        </div>
    );
}