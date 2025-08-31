import { useLocation, useParams } from "react-router-dom"
import { imageCarousel } from "../../classes/image-carousel";
import { Image } from 'primereact/image';
import './product-detail.scss'

function ProductDetails() {
    console.log("product")
    const location = useLocation();
    const product: imageCarousel = location.state?.product
    return (
        <div>
            <div className="flex flex-row justify-content-between">
                <div className="col-5 w-5"><Image src={product.imageUrl} alt={product.name} width="100%"></Image></div>
                <div className="col-7">
                    <div className="font-barlow-condensed text-7xl">{product.name}</div>
                    <div className="font-roboto gold-text text-xl">{product.inspiration}</div>
                    <div className="font-roboto text-xl">{product.fullDescription}</div>
                    <div className="flex flex-row gap-2 justify-content-around">
                        <div className="small-square col-3 pt-5 pb-5 text-center flex flex-column gap-3">
                            <div className="gold-text font-barlow-condensed text-2xl">ABV</div>
                            <div className="font-roboto text-2xl">{product.details.abv}%</div>
                        </div>
                        <div className="small-square col-3 pt-5 pb-5 text-center flex flex-column gap-3">
                            <div className="gold-text font-barlow-condensed text-2xl">IBU</div>
                            <div className="font-roboto text-2xl">{product.details.ibu}%</div>
                        </div>
                        <div className="small-square col-3 pt-5 pb-5 text-center flex flex-column gap-3">
                            <div className="gold-text font-barlow-condensed text-2xl">Temperatura</div>
                            <div className="font-roboto text-2xl"><span><i className="fa fa-thermometer-empty lined-gold-icon" aria-hidden="true"></i></span> {product.details.temperatureRange}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails