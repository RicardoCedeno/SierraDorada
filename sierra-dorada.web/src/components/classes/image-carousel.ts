export interface imageCarousel{
    id: string;
    name: string;
    price: number;
    inspiration: string;
    description: string;
    details: detailImageCarousel
    pairing: pairingImageCarousel[]
    imageUrl: string;
    colorHex: string;
    colorName: string;
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