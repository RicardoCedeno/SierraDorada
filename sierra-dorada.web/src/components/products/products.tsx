import './products.scss'
import carouselImage1 from '../../assets/images/carousel/carousel_products_image_1.avif'
import carouselImage2 from '../../assets/images/carousel/carousel_products_image_2.avif'
import carouselImage3 from '../../assets/images/carousel/carousel_products_image_3.avif'
import carouselImage4 from '../../assets/images/carousel/carousel_products_image_4.avif'
import Carousel from '../shared/carousel';
import { imageCarousel } from '../classes/image-carousel'

const imagesCarousel: imageCarousel[] = [
    {id: '0195a14c-3d26-4720-9dbd-e9f94b1d14b6', colorName: 'Ámbar profundo', colorHex: '#8B4513', name: 'Barley Wine', price: 18000, inspiration: 'Inspirada en Bochica, héroe civilizador', description: 'Sabiduría líquida. Potente como las enseñanzas de Bochica. guía eterno de los Muiscas', details: {abv: 10, ibu: 50, temperatureRange: '12-14 °C'}, pairing: [{image: '🧀', name: 'Quesos añejos'}, {image: '🍮', name: 'Postres de caramelo'}, {image: '🍫', name: 'Chocolate negro'}], imageUrl: carouselImage1},
    {id: '4f9bc2df-3ec9-47a2-99d0-20b73ffb8b07', colorName: 'Ámbar dorado', colorHex: '#F4A460', name: 'American Pale Ale', price: 12000, inspiration: 'Inspirada en Xue, dios del sol', description: 'La luz del sol en cada sorbo. Brilla con el carácter de Xue, el astro mayor de los Muiscas.', details: {abv: 4.8, ibu: 31, temperatureRange: '8-12 °C'}, pairing: [{image: '🍖', name: 'Carnes a la parrilla'}, {image: '🌶️', name: 'Comida picante'}, {image: '🧀', name: 'Quesos fuertes'}], imageUrl: carouselImage2,},
    {id: '807400c9-d68c-4721-8cc6-8635802fa258', colorName: 'Rojo carmesí', colorHex: '#990012', name: 'Sour Ale con Corozo', price: 13000, inspiration: 'Inspirada en Bachué, madre de la humanidad', description: 'Ácida y vibrante, como la vida que dio Bachué. El inicio de todo sabor.', details: {abv: 4.5, ibu: 5, temperatureRange: '6-8 °C'}, pairing: [{image: '🐟', name: 'Ceviches'}, {image: '🥗', name: 'Ensaladas'}, {image: '🍓', name: 'Postres de frutas'}], imageUrl: carouselImage3},
    {id: 'c6834b3a-3606-4df8-b62a-e283910099e6', colorName: 'Negro intenso', colorHex: '#000000', name: 'Stout Premium', price: 14000, inspiration: 'Inspirada en Chibchacum, dios de la tierra', description: 'Oscura y densa como la tierra húmeda. La Stout de Sierra Dorada invoca la fuerza de Chibchacum.', details: {abv: 6.2, ibu: 49, temperatureRange: '10-12 °C'}, pairing: [{image: '🍫', name: 'Postres de chocolate'}, {image: '🥩', name: 'Carnes asadas'}, {image: '🦪', name: 'Ostras'}], imageUrl: carouselImage4},

]


function Products() {
    return (
        <div>
            <div className='mt-4 bt-4'>
                <div className='font-barlow-condensed title-section'>Nuestros Productos</div>
                <div className='text-style-2 font-barlow'>Descubre nuestra selección de cervezas artesanales, cada una con su propia historia y carácter único.</div>
            </div>

            <div className='mt-4 bt-4 flex flex-column justify-content-center align-items-center'>
                <div className='small-title font-barlow-condensed'>NUESTRAS CERVEZAS</div>
                <div className='medium-title font-barlow text-center'>TESOROS LÍQUIDOS</div>
                <div className='text-style-2 w-6 font-barlow text-center'>Cada cerveza es una obra maestra artesanal que honra a las deidades Muiscas, elaborada con los mejores ingredientes y años de experiencia.</div>
            </div>
            <div className='flex flex-column justify-content-center align-items-center'>
                <Carousel imagesList={imagesCarousel}></Carousel>
            </div>
        </div>
    )
}

export default Products