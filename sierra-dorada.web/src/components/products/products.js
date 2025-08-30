import './products.scss'
import React from 'react';
import carouselImage1 from '../../assets/images/carousel/carousel_products_image_1.avif'
import carouselImage2 from '../../assets/images/carousel/carousel_products_image_2.avif'
import carouselImage3 from '../../assets/images/carousel/carousel_products_image_3.avif'
import carouselImage4 from '../../assets/images/carousel/carousel_products_image_4.avif'
import Carousel from '../shared/carousel';

const imagesCarousel = [
    {title: 'Barley Wine', price: 18000, inspiration: 'Inspirada en Bochica, héroe civilizador', description: 'Sabiduría líquida. Potente como las enseñanzas de Bochica. guía eterno de los Muiscas', details: {abv: 10, ibu: 50, temperatureRange: '12-14 °C'}, pairing: [{image: '', name: 'Quesos añejos'}, {image: '', name: 'Postres de caramelo'}, {image: '', name: 'Chocolate negro'}], imageUrl: carouselImage1},
    {title: 'Imagen 2', inspiration: 'Inspirada en Bochica, héroe civilizador', description: 'Sabiduría líquida. Potente como las enseñanzas de Bochica. guía eterno de los Muiscas', details: {abv: 10, ibu: 50, temperatureRange: '12-14 °C'}, pairing: [{image: '', name: 'Quesos añejos'}, {image: '', name: 'Postres de caramelo'}, {image: '', name: 'Chocolate negro'}], imageUrl: carouselImage2,},
    {title: 'Imagen 3', inspiration: 'Inspirada en Bochica, héroe civilizador', description: 'Sabiduría líquida. Potente como las enseñanzas de Bochica. guía eterno de los Muiscas', details: {abv: 10, ibu: 50, temperatureRange: '12-14 °C'}, pairing: [{image: '', name: 'Quesos añejos'}, {image: '', name: 'Postres de caramelo'}, {image: '', name: 'Chocolate negro'}], imageUrl: carouselImage3},
    {title: 'Imagen 4', inspiration: 'Inspirada en Bochica, héroe civilizador', description: 'Sabiduría líquida. Potente como las enseñanzas de Bochica. guía eterno de los Muiscas', details: {abv: 10, ibu: 50, temperatureRange: '12-14 °C'}, pairing: [{image: '', name: 'Quesos añejos'}, {image: '', name: 'Postres de caramelo'}, {image: '', name: 'Chocolate negro'}], imageUrl: carouselImage4}

]


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
                <Carousel imagesList={imagesCarousel}></Carousel>
            </div>
        </div>
    )
}

export default Products