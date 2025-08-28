import './products.scss'
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';
import React, { useState, useEffect } from 'react';
import Carousel from './carousel';
import Carousel2 from './carousel2';


function Products() {
    return (
        <div>
            <div className='mt-4 bt-4'>
                <h2>Nuestros Productos</h2>
                <div className='text-style-2'>Descubre nuestra selección de cervezas artesanales, cada una con su propia historia y carácter único.</div>
            </div>

            <div className='mt-4 bt-4 flex flex-column justify-content-center align-items-center'>
                <div className='small-title'>NUESTRAS CERVEZAS</div>
                <div className='medium-title'>TESOROS LÍQUIDOS</div>
                <div className='text-style-2 w-6'>Cada cerveza es una obra maestra artesanal que honra a las deidades Muiscas, elaborada con los mejores ingredientes y años de experiencia.</div>
            </div>
            <div className='flex flex-column justify-content-center align-items-center'>
                <Carousel2></Carousel2>
                <Carousel></Carousel>
            </div>
        </div>
    )
}

export default Products