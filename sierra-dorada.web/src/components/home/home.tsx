import { Button } from 'primereact/button'
import { imagesCardsUrl } from '../../utils/images'
import './home.scss'
import MountainIcon from '../../assets/mountain.svg'
import { InputText } from 'primereact/inputtext';
function Home() {
    const cards = [
        { imageUrl: imagesCardsUrl.image1Url, title: 'Selección de Ingredientes', description: 'Ingredientes locales de la más alta calidad' },
        { imageUrl: imagesCardsUrl.image2Url, title: 'Proceso de Elaboración', description: 'Técnicas artesanales tradicionales' },
        { imageUrl: imagesCardsUrl.image3Url, title: 'Resultado Final', description: 'Cervezas únicas y llenas de carácter' },
    ]

    const cardsTexts = [
        {
            svgDrwaw: MountainIcon,
            title: 'Región Andina',
            text: 'Nuestro oso de anteojos, símbolo de la majestuosidad de los Andes colombianos, donde nace nuestra historia.'
        },
        {
            svgDrwaw: MountainIcon,
            title: 'Región Andina',
            text: 'Nuestro oso de anteojos, símbolo de la majestuosidad de los Andes colombianos, donde nace nuestra historia.'
        },
        {
            svgDrwaw: MountainIcon,
            title: 'Región Andina',
            text: 'Nuestro oso de anteojos, símbolo de la majestuosidad de los Andes colombianos, donde nace nuestra historia.'
        },
        {
            svgDrwaw: MountainIcon,
            title: 'Artesanía Cervecera',
            text: 'Elaboramos nuestras cervezas con ingredientes locales y técnicas tradicionales.'
        },
        {
            svgDrwaw: MountainIcon,
            title: 'Calidad Premium',
            text: 'Nuestro compromiso con la excelencia nos ha valido reconocimientos internacionales.'
        },
        {
            svgDrwaw: MountainIcon,
            title: 'Experiencia Única',
            text: 'Ofrecemos visitas guiadas, catas y eventos especiales para los amantes de la cerveza.'
        }
    ]

    return (
        <div>
            <h1>
                <div className='title-container'>
                    <span className='font-dorsa main-text'>Sierra Dorada</span>
                    <span className='font-dorsa main-text-secondary'>El Tesoro del Dorado</span>
                </div>
            </h1>
            <div className='font-barlow text text-center w-6 mx-auto'>Inspirados en la legendaria búsqueda de El Dorado y la rica cultura Muisca, transformamos los tesoros de nuestra tierra en experiencias cerveceras únicas.</div>

            <div className='buttons-container'>
                <Button className='p-button-text main-button-background'><span className='font-barlow'>Descubrir Cervezas</span></Button>
                <Button className='p-button-text main-button-transparent'><span className='font-barlow'>Nuestra historia</span></Button>
            </div>

            <div className="section-with-bg">
                <div className="content">
                    <div className='font-dorsa title-section'>El Arte de la Cerveza Artesanal</div>
                    <div className='font-barlow text'>Descubre el proceso meticuloso detrás de cada cerveza Sierra Dorada</div>

                    <div className='cards-container flex flex-column sm:flex-row gap-4'>
                        {cards.map((card, index) => (
                            <div key={index}>
                                <img alt='etiqueta' className='w-12 sm:w-12' src={card.imageUrl}></img>
                                <div className='image-title font-dorsa'>{card.title}</div>
                                <div className='font-barlow text'>{card.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='section-cards mt-8 mb-8'>
                <div className='cards-text-container'>
                    <div className='card-text flex flex-column sm:flex-row gap-3'>
                        {cardsTexts.slice(0, 3).map((card, index) => (
                            <div className='card-only p-4' key={index}>
                                <span className='svg-circle'><img src={card.svgDrwaw} alt={card.title}></img></span>
                                <h2 className='font-dorsa image-title'>{card.title}</h2>
                                <p className='font-barlow text'>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr className='separator'></hr>

            <div className='section-cards mt-8 mb-8'>
                <div className='cards-text-container'>
                    <div className='card-text flex flex-column sm:flex-row gap-3'>
                        {cardsTexts.slice(3, 6).map((card, index) => (
                            <div className='card-only p-4' key={index}>
                                <span className='svg-circle'><img src={card.svgDrwaw} alt={card.title}></img></span>
                                <h2 className='font-dorsa image-title'>{card.title}</h2>
                                <p className='font-barlow text'>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='section-dark mt-8 bt-8 flex flex-column justify-content-center align-items-center'>
                <h1 className='font-dorsa title-section'>Descubre el Tesoro de los Andes</h1>
                <div className='font-barlow text text-style-2 text-center w-9'>Únete a nuestra búsqueda por la cerveza perfecta, donde cada sorbo es un tributo a la leyenda de El Dorado y los sabores de nuestra tierra.</div>
                <Button className='font-barlow p-button-text main-button-background mt-4 mb-4' label='Explorar Servicios'></Button>
            </div>

            <div className='section-join mt-8 bt-8 flex flex-column justify-content-center align-items-center'>
                <span className='svg-circle'><img src={MountainIcon} alt="icono"></img></span>
                <div className='font-dorsa title-section'>Únete a la Leyenda</div>
                <div className='font-barlow text text-style-2 text-center w-9'>Suscríbete para recibir noticias, eventos exclusivos y ofertas especiales de Sierra Dorada directamente en tu bandeja de entrada.</div>
                <div className='flex flex-column sm:flex-row gap-3 mt-4 col-12 justify-content-center align-items-center'>
                    <InputText className='font-barlow input-text-style col-12 sm:col-6 inputtext-style' placeholder='Tu correo electrónico'></InputText>
                    <Button className='font-barlow main-button-background p-button-text col-12 sm:col-2 text-center' label='Suscribirse'><span className='pi pi-bars'></span></Button>
                </div>
                <div className='font-barlow text small-text w-6 text-center mt-4'>Al suscribirte, aceptas recibir correos electrónicos de marketing de Sierra Dorada. Puedes darte de baja en cualquier momento.</div>
            </div>

            <div className='flex flex-column section-dark p-4 mt-4'>
                <div className='flex flex-column sm:flex-row align-items-center mt-4'>
                    <div className='col-4 font-dorsa subtitle-section'>Cervecería artesanal comprometida con la calidad y la tradición cervecera desde 2010.</div>
                    <div className='flex flex-column col-12 sm:col-4 gap-3'>
                        <div className='font-dorsa subtitle-section subtitle-gold-style'>Enlaces Rápidos</div>
                        <div className='font-barlow text'>Inicio</div>
                        <div className='font-barlow text'>Productos</div>
                        <div className='font-barlow text'>Nuestra Leyenda</div>
                        <div className='font-barlow text'>Contacto</div>
                    </div>
                    <div className='flex flex-column col-12 sm:col-4 gap-3'>
                        <div className='font-barlow subtitle-section subtitle-gold-style'>Contacto</div>
                        <div className='text-link font-barlow text' style={{ wordBreak: 'break-all' }}><span><i className="fa fa-phone fa-lg icon-outline"></i></span> +57 313 871 8154</div>
                        <div className='text-link font-barlow text' style={{ wordBreak: 'break-all' }}><span><i className="fa fa-envelope fa-lg icon-outline"></i></span> contacto@sierradorada.co</div>
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
                <div className='font-barlow text'>© 2025 Sierra Dorada. Todos los derechos reservados.</div>
                <div className='font-barlow text'>EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD.</div>
            </div>

        </div>
    )
}

export default Home