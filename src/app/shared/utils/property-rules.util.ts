import { Property } from '../model/property';

export function hasLatLon(property: Property): boolean {
    const { lon, lat } = property.address.geoLocation.location;
    return lon !== 0 && lat !== 0;
}

export function isRental(property: Property): boolean {
    return property.pricingInfos.businessType === 'RENTAL';
}

export function isSale(property: Property): boolean {
    return property.pricingInfos.businessType === 'SALE';
}

// ZAP
export function isMinimumRentalValue(property: Property): boolean {
    return Number(property.pricingInfos.price) >= 3500;
}

export function isMinimumSaleValue(property: Property): boolean {
    return Number(property.pricingInfos.price) >= 600000;
}

export function isMinimumAreaValue(property: Property): boolean {
    return property.usableAreas > 0 && Number(property.pricingInfos.price) / property.usableAreas > 3500;
}

// VIVA REAL
export function isMaximumRentalValue(property: Property): boolean {
    return Number(property.pricingInfos.monthlyCondoFee) > 0 && Number(property.pricingInfos.price) <= 4000;
}

export function isMaximumSaleValue(property: Property): boolean {
    return Number(property.pricingInfos.price) <= 700000;
}

export function isMaximumCondoFeeValue(property: Property): boolean {
    return Number(property.pricingInfos.monthlyCondoFee) / Number(property.pricingInfos.price) * 100 < 30;
}
