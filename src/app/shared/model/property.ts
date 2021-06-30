export interface Location {
    lon: number;
    lat: number;
}

export interface GeoLocation {
    precision: string;
    location: Location;
}

export interface Address {
    city: string;
    neighborhood: string;
    geoLocation: GeoLocation;
}

export interface PricingInfos {
    // ver isso, de converter todos pra numero
    price: string | number;
    businessType: string;
    monthlyCondoFee?: string;
    yearlyIptu?: string;
    period?: string;
    rentalTotalPrice?: string;
}

export interface Property {
    usableAreas: number;
    listingType: string;
    createdAt: string;
    listingStatus: string;
    id: string;
    updatedAt: string;
    owner: boolean;
    images: string[];
    address: Address;
    bathrooms: number;
    bedrooms: number;
    pricingInfos: PricingInfos;
    parkingSpaces?: number;
}
