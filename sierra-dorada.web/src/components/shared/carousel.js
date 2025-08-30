import './carousel.scss'

export default function Carousel({ imagesList }) {
    const items = imagesList

    return (
        <div className="carousel-container overflow-hidden">
            <div className="carousel-track flex">
                {[...items, ...items].map((item, idx) => (
                    <div
                        key={idx}
                        className="carousel-item border-round shadow-2"
                    >
                        <img src={item.imageUrl} alt={`slide-${idx}`} className=" object-cover" />
                        <div>{item.title}</div>
                        <div>${item.price}</div>
                        <div>{item.inspiration}</div>
                        <div>{item.description}</div>
                        <div className="flex flex-row">
                            <div>
                                <div>DETALLES: {item.details.abv}%</div>
                                <div>IBU: {item.details.ibu}</div>
                                <div>TEMP: {item.details.temperatureRange}</div>
                            </div>
                            <div className="flex flex-column">
                                {item.pairing.map((pair, idx)=>(
                                    <div>{pair.name}</div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
