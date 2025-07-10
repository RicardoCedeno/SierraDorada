import { Button } from 'primereact/button'
import { useState } from 'react'
import { imagesCardsUrl } from '../../utils/images'
import './home.scss'
function Home() {
    const cards = useState([
        {imageUrl: imagesCardsUrl.image1Url, title: 'Selección de Ingredientes', description: 'Ingredientes locales de la más alta calidad'},
        {imageUrl: imagesCardsUrl.image2Url, title: 'Proceso de Elaboración', description: 'Técnicas artesanales tradicionales'},
        {imageUrl: imagesCardsUrl.image3Url, title: 'Resultado Final', description: 'Cervezas únicas y llenas de carácter'},
    ])

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
                        {cards.map((card, index)=>(
                            <div key={index}>
                                <img alt='etiqueta' className='w-12 sm:w-12' src={card.imageUrl}></img>
                                <div>{card.title}</div>
                                <div>{card.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home