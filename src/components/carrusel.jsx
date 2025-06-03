import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import portada from '../assets/portada.jpg';
import portada22 from '../assets/portada22.jpg';
import portada3 from '../assets/portada3.png';

export function Carrusel() {
  return (
    <div id='carouselExample' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={portada} className='d-block w-100' alt='Portada' />
        </div>
        <div className='carousel-item'>
          <img src={portada22} className='d-block w-100' alt='XR300' />
        </div>
        <div className='carousel-item'>
          <img src={portada3} className='d-block w-100' alt='DR650' />
        </div>
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Anterior</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carouselExample' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Siguiente</span>
      </button>
    </div>
  );
}