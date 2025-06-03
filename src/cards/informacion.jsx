import React from 'react';
import Card from 'react-bootstrap/Card';
import { data } from './data';
import { Destino } from './destino';

export function Informacion() {
    const datosCards = data;

    return (
        <div className='container'>
            <h2 className='text-center mb-4'>MotosXtremerVol</h2>
            <div className='row'>
                {datosCards.map(({ moto, title, descripcion, precio, cilindrage, peso, velocidad }) => (
                    <Destino
                        key={moto.id}
                        moto={moto}
                        title={title}
                        descripcion={descripcion}
                        precio={precio}
                        cilindrage={cilindrage}
                        peso={peso}
                        velocidad={velocidad}
                        image={moto?.image}
                    />
                ))}
            </div>
        </div>
    );
}