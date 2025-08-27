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
                    <span className='main-text'>Sierra Dorada</span>
                    <span className='main-text-secondary'>El Tesoro del Dorado</span>
                </div>
            </h1>
            <div className='text'>Inspirados en la legendaria búsqueda de El Dorado y la rica cultura Muisca, transformamos los tesoros de nuestra tierra en experiencias cerveceras únicas.</div>

            <div className='buttons-container'>
                <Button className='p-button-text main-button-background'>Descubrir Cervezas</Button>
                <Button className='p-button-text main-button-transparent'>Nuestra historia</Button>
            </div>

            <div className="section-with-bg">
                <div className="content">
                    <h2>El Arte de la Cerveza Artesanal</h2>
                    <div>Descubre el proceso meticuloso detrás de cada cerveza Sierra Dorada</div>

                    <div className='cards-container flex flex-column sm:flex-row gap-4'>
                        {cards.map((card, index) => (
                            <div key={index}>
                                <img alt='etiqueta' className='w-12 sm:w-12' src={card.imageUrl}></img>
                                <div>{card.title}</div>
                                <div>{card.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='section-cards mt-8 mb-8'>
                <div className='cards-text-container'>
                    <div className='card-text flex flex-row gap-3'>
                        {cardsTexts.slice(0, 3).map((card, index) => (
                            <div className='card-only p-4' key={index}>
                                <span className='svg-circle'><img src={card.svgDrwaw} alt={card.title}></img></span>
                                <h2>{card.title}</h2>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr className='separator'></hr>

            <div className='section-cards mt-8 mb-8'>
                <div className='cards-text-container'>
                    <div className='card-text flex flex-row gap-3'>
                        {cardsTexts.slice(3, 6).map((card, index) => (
                            <div className='card-only p-4' key={index}>
                                <span className='svg-circle'><img src={card.svgDrwaw} alt={card.title}></img></span>
                                <h2>{card.title}</h2>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='section-dark mt-8 bt-8 flex flex-column justify-content-center align-items-center'>
                <h1>Descubre el Tesoro de los Andes</h1>
                <div className='text-style-2 text-center w-9'>Únete a nuestra búsqueda por la cerveza perfecta, donde cada sorbo es un tributo a la leyenda de El Dorado y los sabores de nuestra tierra.</div>
                <Button className='p-button-text main-button-background mt-4 mb-4' label='Explorar Servicios'></Button>
            </div>

            <div className='section-join mt-8 bt-8 flex flex-column justify-content-center align-items-center'>
                <span className='svg-circle'><img src={MountainIcon}></img></span>
                <h1>Únete a la Leyenda</h1>
                <div className='text-style-2 text-center w-9'>Suscríbete para recibir noticias, eventos exclusivos y ofertas especiales de Sierra Dorada directamente en tu bandeja de entrada.</div>
                <div className='flex flex-column sm:flex-row gap-3 mt-4 col-12 justify-content-center align-items-center'>
                    <InputText className='input-text-style col-12 sm:col-6 inputtext-style' placeholder='Tu correo electrónico'></InputText>
                    <Button className='main-button-background p-button-text col-12 sm:col-2 text-center' label='Suscribirse'><span className='pi pi-bars'></span></Button>
                </div>
                <div className='small-text w-6 text-center mt-4'>Al suscribirte, aceptas recibir correos electrónicos de marketing de Sierra Dorada. Puedes darte de baja en cualquier momento.</div>
            </div>

            <div className='section-dark flex flex-row align-items-center mt-4'>
                <div className='w-4'>Cervecería artesanal comprometida con la calidad y la tradición cervecera desde 2010.</div>
                <div className='flex flex-column w-4 gap-3'>
                    <div className='subtitle-gold-style'>Enlaces Rápidos</div>
                    <div>Inicio</div>
                    <div>Productos</div>
                    <div>Nuestra Leyenda</div>
                    <div>Contacto</div>
                </div>
                <div className='flex flex-column w-4 gap-3'>
                    <div className='subtitle-gold-style'>Contacto</div>
                    <div>+57 313 871 8154</div>
                    <div>contacto@sierradorada.co</div>
                </div>
            </div>
        </div>

    )
}

export default Home