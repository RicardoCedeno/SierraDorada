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
    fullDescription: string;
    legend: string;
    process: string;
    characteristics: characteristics
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

export interface characteristics{
    color: string;
    smell: string;
    taste: string;
    pairing: string;
}