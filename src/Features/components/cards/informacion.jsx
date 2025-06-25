import React from 'react';
import { data } from './data';
import { Destino } from './destino';

export function Informacion() {
    return (
        <div className='container'>
            <h2 className='text-center mb-4'>MotosXtremeVol</h2>
            <div className='row'>
                {data.map((item) => (
                    <div className="col-md-4 mb-4" key={item.moto.id}>
                        <Destino
                            moto={item.moto}
                            descripcion={item.descripcion}
                            precio={item.precio}
                            cilindrage={item.cilindrage}
                            peso={item.peso}
                            velocidad={item.velocidad}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}