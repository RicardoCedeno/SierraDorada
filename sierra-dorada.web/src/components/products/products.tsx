import './products.scss'
import carouselImage1 from '../../assets/images/carousel/carousel_products_image_2.avif'
import carouselImage2 from '../../assets/images/carousel/carousel_products_image_1.avif'
import carouselImage3 from '../../assets/images/carousel/carousel_products_image_3.avif'
import carouselImage4 from '../../assets/images/carousel/carousel_products_image_4.avif'
import Carousel from '../shared/carousel';
import { imageCarousel } from '../classes/image-carousel'
import { Button } from "primereact/button";
import { useState } from 'react'
import { order } from '../classes/price'


const imagesCarousel: imageCarousel[] = [
    {
        id: '4f9bc2df-3ec9-47a2-99d0-20b73ffb8b07', colorName: 'Ámbar dorado', colorHex: '#F4A460', name: 'American Pale Ale', price: 12000, inspiration: 'Inspirada en Xue, dios del sol', description: 'La luz del sol en cada sorbo. Brilla con el carácter de Xue, el astro mayor de los Muiscas.', details: { abv: 4.8, ibu: 31, temperatureRange: '8-12 °C' }, pairing: [{ image: '🍖', name: 'Carnes a la parrilla' }, { image: '🌶️', name: 'Comida picante' }, { image: '🧀', name: 'Quesos fuertes' }], imageUrl: carouselImage1, fullDescription: 'Nuestra American Pale Ale rinde homenaje a Xue, el dios sol de los Muiscas. Con un perfecto balance entre maltas y lúpulos americanos, ofrece notas cítricas y tropicales que evocan los rayos del sol atravesando el páramo andino.', legend: 'Xue, el dios del sol, brilla en cada sorbo de esta APA. Su luz dorada y carácter vibrante evocan la energía vital del astro rey.', process: 'Elaborada con maltas pale y crystal, complementada con lúpulos americanos. Fermentación limpia que resalta los aromas cítricos.', characteristics: {
            color: 'Ámbar dorado brillante',
            smell: 'Cítricos, frutas tropicales y pino',
            taste: 'Balance entre malta y lúpulo con final seco',
            pairing: 'Carnes a la parrilla, comida picante, quesos fuertes'
        },
    },
    {
        id: '0195a14c-3d26-4720-9dbd-e9f94b1d14b6', colorName: 'Ámbar profundo', colorHex: '#8B4513', name: 'Barley Wine', price: 18000, inspiration: 'Inspirada en Bochica, héroe civilizador', description: 'Sabiduría líquida. Potente como las enseñanzas de Bochica. guía eterno de los Muiscas', details: { abv: 10, ibu: 50, temperatureRange: '12-14 °C' }, pairing: [{ image: '🧀', name: 'Quesos añejos' }, { image: '🍮', name: 'Postres de caramelo' }, { image: '🍫', name: 'Chocolate negro' }], imageUrl: carouselImage2, fullDescription: 'Nuestra Barley Wine de edición especial honra a Bochica, el héroe civilizador de los Muiscas. Su complejidad y potencia evocan la sabiduría ancestral, mientras que su maduración representa el tiempo necesario para alcanzar la iluminación.', legend: 'Bochica, el sabio maestro de los Muiscas, comparte su sabiduría en esta compleja Barley Wine.', process: 'Madurada durante meses para desarrollar su complejidad, embotellada en formato especial de 500ml.', characteristics: {
            color: 'Ámbar profundo con reflejos cobrizos',
            smell: 'Caramelo, frutas oscuras y notas vinosas',
            taste: 'Complejo con final cálido',
            pairing: 'Quesos añejos, postres de caramelo, chocolate negro'
        },
    },
    {
        id: '807400c9-d68c-4721-8cc6-8635802fa258', colorName: 'Rojo carmesí', colorHex: '#990012', name: 'Sour Ale con Corozo', price: 13000, inspiration: 'Inspirada en Bachué, madre de la humanidad', description: 'Ácida y vibrante, como la vida que dio Bachué. El inicio de todo sabor.', details: { abv: 4.5, ibu: 5, temperatureRange: '6-8 °C' }, pairing: [{ image: '🐟', name: 'Ceviches' }, { image: '🥗', name: 'Ensaladas' }, { image: '🍓', name: 'Postres de frutas' }], imageUrl: carouselImage3, fullDescription: 'Nuestra Sour Ale con Corozo honra a Bachué, la diosa madre de los Muiscas. El corozo, fruta ancestral, representa la fertilidad y el origen, mientras que su acidez evoca la pureza de las aguas sagradas.', legend: 'Bachué, la madre de la humanidad, emerge de las lagunas sagradas en esta cerveza ácida con corozo.', process: 'Fermentación mixta con lactobacillus, adición de corozo durante la maduración.', characteristics: {
            color: 'Rojo carmesí intenso',
            smell: 'Frutal intenso con notas ácidas',
            taste: 'Ácido refrescante con notas de frutos rojos',
            pairing: 'Ceviches, ensaladas frescas, postres de frutas'
        },
    },
    {
        id: 'c6834b3a-3606-4df8-b62a-e283910099e6', colorName: 'Negro intenso', colorHex: '#000000', name: 'Stout Premium', price: 14000, inspiration: 'Inspirada en Chibchacum, dios de la tierra', description: 'Oscura y densa como la tierra húmeda. La Stout de Sierra Dorada invoca la fuerza de Chibchacum.', details: { abv: 6.2, ibu: 49, temperatureRange: '10-12 °C' }, pairing: [{ image: '🍫', name: 'Postres de chocolate' }, { image: '🥩', name: 'Carnes asadas' }, { image: '🦪', name: 'Ostras' }], imageUrl: carouselImage4, fullDescription: 'Nuestra Stout Premium honra a Chibchacum, el poderoso dios de la tierra y las aguas. Sus intensos sabores a café y chocolate evocan la profundidad de la tierra, mientras que su suavidad recuerda las aguas subterráneas.', legend: 'Chibchacum, dios de las aguas y la tierra, se manifiesta en esta stout profunda y compleja.', process: 'Elaborada con una mezcla de maltas tostadas y chocolate, fermentación a temperatura controlada.', characteristics: {
            color: 'Negro intenso con espuma cremosa',
            smell: 'Café recién tostado y chocolate negro',
            taste: 'Complejo con notas a café y chocolate',
            pairing: 'Postres de chocolate, carnes asadas, ostras'
        },
    },

]

const products: imageCarousel[] = imagesCarousel


function Products() {
    const [pack, setPack] = useState<(imageCarousel | null)[]>([null, null, null, null]);
    // const [price, setPrice] = useState<order>({total: 0, subTotal: 0, discount: 0})
    const addToPack = (product: imageCarousel) => {
        setPack((prevPack) => {
            const index = prevPack.findIndex((p) => p === null);
            if (index === -1) return prevPack; // ya lleno
            const newPack = [...prevPack];
            newPack[index] = product; // ✅ ahora sí permite string
            console.log("newpack ", newPack)
            return newPack;
        });
    }

    const removeFromPack = (index: number) => {
        setPack((prevPack) => {
            // Quitar el elemento en la posición `index`
            const newPack = prevPack.filter((_, i) => i !== index);
            // Rellenar con null hasta tener 4
            while (newPack.length < 4) {
                newPack.push(null);
            }
            return newPack;
        });
    };

    return (
        <div>
            <div className='mt-4 bt-4'>
                <div className='font-barlow-condensed title-section'>Nuestros Productos</div>
                <div className='text-style-2 font-roboto'>Descubre nuestra selección de cervezas artesanales, cada una con su propia historia y carácter único.</div>
            </div>

            <div className='mt-4 bt-4 flex flex-column justify-content-center align-items-center'>
                <div className='small-title font-barlow-condensed'>NUESTRAS CERVEZAS</div>
                <div className='medium-title font-roboto text-center'>TESOROS LÍQUIDOS</div>
                <div className='text-style-2 w-6 font-roboto text-center'>Cada cerveza es una obra maestra artesanal que honra a las deidades Muiscas, elaborada con los mejores ingredientes y años de experiencia.</div>
            </div>
            <div className='flex flex-column justify-content-center align-items-center'>
                <Carousel imagesList={imagesCarousel}></Carousel>
            </div>

            <div className='mt-4 bt-4 flex flex-column justify-content-center align-items-center'>
                <div className='small-title font-barlow-condensed'>Oferta Especial</div>
                <div className='medium-title font-roboto text-center'>Crea tu 4-Pack</div>
                <div className='text-style-2 w-6 font-roboto text-center'>Selecciona tus 4 cervezas favoritas y obtén un 25% de descuento en tu pack personalizado.</div>
            </div>

            <div className='flex flex-column sm:flex-row'>
                {products.map((product, index) => (
                    <div key={product.id} className="flex flex-column col-12 sm:col-3 md:col-3 gap-3">
                        <div className='product-container pb-5 h-full'>
                            <div className=''><img className='w-full object-cover border-round max-h-10rem sm:max-h-11rem md:max-h-10rem' width='100%' src={product.imageUrl} alt={product.name}></img></div>
                            <div className='col-11 font-barlow text-2xl'>{product.name}</div>
                            <div className='col-11 font-roboto text-base gold-text'>${product.price}</div>
                            <Button onClick={() => addToPack(product)} className='selected-button font-roboto col-10 mx-auto' label='Agregar al pack' rounded></Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='pl-2 pr-2 product-container pt-4 pb-4'>
                <div className='font-roboto text-2xl'>Tu Pack Personalizado</div>
                <div className='small-title text-right pr-3'>{pack.filter((p) => p !== null).length}/4 cervezas</div>
                <div className='flex flex-column sm:flex-row justify-content-around align-items-center'>
                    {pack.map((item, i) => (
                        <div
                            key={i}
                            className="relative mt-4 dashed-border w-20rem sm:w-8rem md:w-15rem h-8rem"
                        >
                            {item && (
                                <>
                                    <img
                                        className="w-full h-8rem object-cover fade-in"
                                        src={item.imageUrl}
                                        alt=""
                                    />
                                    <Button
                                        size='small'
                                        icon="fa fa-times"
                                        className="button-image p-button-rounded p-button-danger absolute top-0 right-0 m-1"
                                        onClick={() => removeFromPack(i)}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-column section-dark p-4 mt-4'>
                <div className='flex flex-column sm:flex-row align-items-center mt-4'>
                    <div className='col-4 font-roboto subtitle-section'>Cervecería artesanal comprometida con la calidad y la tradición cervecera desde 2010.</div>
                    <div className='flex flex-column col-12 sm:col-4 gap-3'>
                        <div className='font-barlow subtitle-section subtitle-gold-style'>Enlaces Rápidos</div>
                        <div className='font-roboto text'>Inicio</div>
                        <div className='font-roboto text'>Productos</div>
                        <div className='font-roboto text'>Nuestra Leyenda</div>
                        <div className='font-roboto text'>Contacto</div>
                    </div>
                    <div className='flex flex-column col-12 sm:col-4 gap-3'>
                        <div className='font-barlow subtitle-section subtitle-gold-style'>Contacto</div>
                        <div className='text-link font-roboto text' style={{ wordBreak: 'break-all' }}><span><i className="fa fa-phone fa-lg icon-outline"></i></span> +57 313 871 8154</div>
                        <div className='text-link font-roboto text' style={{ wordBreak: 'break-all' }}><span><i className="fa fa-envelope fa-lg icon-outline"></i></span> contacto@sierradorada.co</div>
                    </div>
                </div>
                <div className=' mt-4 flex flex-column sm:flex-row gap-3 justify-content-center align-items-center'>
                    <span><i className="fa fa-facebook fa-lg icon-link" aria-hidden="true"></i></span>
                    <span><i className="fa fa-instagram fa-lg icon-link" aria-hidden="true"></i></span>
                    <span><i className="fa fa-linkedin fa-lg icon-link" aria-hidden="true"></i></span>
                    <span><i className="fa fa-whatsapp fa-lg icon-link" aria-hidden="true"></i></span>
                </div>
            </div>

            <div className='text-center mt-4'>
                <div className='font-roboto text'>© 2025 Sierra Dorada. Todos los derechos reservados.</div>
                <div className='font-roboto text'>EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD.</div>
            </div>
        </div>
    )
}

export default Products