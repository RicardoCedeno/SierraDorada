import { useLocation } from "react-router-dom"
import { imageCarousel } from "../../classes/image-carousel";
import { Image } from 'primereact/image';
import './product-detail.scss'
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
    const navigate = useNavigate();
    console.log("product")
    const location = useLocation();
    const product: imageCarousel = location.state?.product
    return (
        <div>
            <div className="flex flex-column md:flex-row justify-content-between">
                <div className="col-12 md:col-5 w-full md:w-5"><Image src={product.imageUrl} alt={product.name} width="100%"></Image></div>
                <div className="col-12 md:col-7">
                    <div className="font-barlow-condensed text-7xl">{product.name}</div>
                    <div className="font-roboto gold-text text-xl">{product.inspiration}</div>
                    <div className="font-roboto text-xl">{product.fullDescription}</div>
                    <div className="flex flex-column md:flex-row gap-3 justify-content-center mt-3">
                        <div className="small-square col-12 md:col-3 pt-5 pb-5 text-center flex flex-column gap-3">
                            <div className="gold-text font-barlow-condensed text-xl sm:text-xl">ABV</div>
                            <div className="font-roboto text-2xl">{product.details.abv}%</div>
                        </div>
                        <div className="small-square col-12 md:col-3 pt-5 pb-5 text-center flex flex-column gap-3">
                            <div className="gold-text font-barlow-condensed text-xl sm:text-xl">IBU</div>
                            <div className="font-roboto text-2xl">{product.details.ibu}%</div>
                        </div>
                        <div className="small-square col-12 md:col-3 pt-5 pb-5 text-center flex flex-column gap-3">
                            <div className="gold-text font-barlow-condensed text-xl sm:text-xl">Temperatura</div>
                            <div className="font-roboto text-2xl"><span><i className="fa fa-thermometer-empty lined-gold-icon" aria-hidden="true"></i></span> {product.details.temperatureRange}</div>
                        </div>
                    </div>
                    <div className="small-square pb-4 pt-4 mt-4">
                        <div className=" pl-5 gold-text font-barlow-condensed text-xl sm:text-2xl">Características</div>
                        <div className="mt-5 pl-5 gold-text font-roboto text-base">Color</div>
                        <div className="mt-2 font-roboto text-base pl-5">{product.characteristics.color}</div>

                        <div className="mt-5 pl-5 gold-text font-roboto text-base">Aroma</div>
                        <div className="mt-2 font-roboto text-base pl-5">{product.characteristics.smell}</div>

                        <div className="mt-5 pl-5 gold-text font-roboto text-base">Sabor</div>
                        <div className="mt-2 font-roboto text-base pl-5">{product.characteristics.taste}</div>

                        <div className="mt-5 pl-5 gold-text font-roboto text-base">Color</div>
                        <div className="mt-2 font-roboto text-base pl-5">{product.characteristics.pairing}</div>
                    </div>

                    <div className="small-square pb-4 pt-4 mt-4">
                        <div className=" pl-5 gold-text font-barlow-condensed text-xl sm:text-2xl">Proceso de Elaboración</div>
                        <div className="mt-2 font-roboto text-base pl-5">{product.process}</div>
                    </div>

                    <div className="small-square pb-4 pt-4 mt-4">
                        <div className=" pl-5 gold-text font-barlow-condensed text-xl sm:text-2xl">La Leyenda</div>
                        <div className="mt-2 font-roboto text-base pl-5">{product.legend}</div>
                    </div>

                    <div className="flex flex-column sm:flex-row gap-4 mt-5">
                        <Button className="pl-4 pr-4 selected-button"><span><i className="fa fa-shopping-cart fa-lg filled-icon"></i> Añadir al carrito - ${product.price}</span></Button>
                        <Button onClick={() => navigate(`/productos`, {state: {product}})} className="pl-4 pr-4 unselected-button"><span>Volver</span></Button>
                    </div>
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

export default ProductDetails