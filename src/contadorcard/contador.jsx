import React, {useState} from 'react';

export function Contadorcard(){
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
    
    return (
        <div className='d-flrex aling -items-center justify-content-center gap-2'>
            <button className="btn btn-primary" onClick={incrementar} >+</button>
            <span className='sf-5'>{contador}</span>
            <button className="btn btn-secondary"onClick={decrementar} >-</button>
        </div>
    );
}