export interface imageCarousel{
    title: string;
    price: number;
    inspiration: string;
    description: string;
    details: detailImageCarousel
    pairing: pairingImageCarousel[]
    imageUrl: string
}

export interface detailImageCarousel{
    abv: number;
    ibu: number;
    temperatureRange: string;
}

export interface pairingImageCarousel{
    image: string;
    name: string;
}