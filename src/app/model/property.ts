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
    yearlyIptu: string;
    price: string;
    businessType: string;
    monthlyCondoFee: string;
}

export interface Property {
    usableAreas: number;
    listingType: string;
    createdAt: Date;
    listingStatus: string;
    id: string;
    parkingSpaces: number;
    updatedAt: Date;
    owner: boolean;
    images: string[];
    address: Address;
    bathrooms: number;
    bedrooms: number;
    pricingInfos: PricingInfos;
}
