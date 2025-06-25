import React from 'react';
import '../../App.css';

export function cardInfo({ 
  bike = {
    id: 1,
    brand: "Yamaha",
    model: "R1",
    year: 2023,
    price: 15000,
    engine: "1000cc",
    condition: "Nueva",
    color: "Azul",
    mileage: 0,
    image: "https://via.placeholder.com/300x200",
    dealer: "MotoMax",
    phone: "1234567890",
    email: "info@motomax.com"
  }
}) {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem auto" }}>
      <img src={bike.image} className="card-img-top" alt={`${bike.brand} ${bike.model}`} />
      <div className="card-body">
        <h5 className="card-title">{`${bike.brand} ${bike.model}`}</h5>
        <p className="card-text">Año: {bike.year}</p>
        <p className="card-text">Precio: ${bike.price}</p>
        <p className="card-text">Motor: {bike.engine}</p>
        <p className="card-text">Condición: {bike.condition}</p>
        <p className="card-text">Color: {bike.color}</p>
        <p className="card-text">Kilometraje: {bike.mileage} km</p>
        <a href="#" className="btn btn-primary">Contactar</a>
      </div>
    </div>
  );
}