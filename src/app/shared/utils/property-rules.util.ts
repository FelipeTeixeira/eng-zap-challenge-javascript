import { Property } from '../model/property';

export default class PropertyRulesUtils {
    hasLatLon(property: Property): boolean {
        const { lon, lat } = property.address.geoLocation.location;
        return lon !== 0 && lat !== 0;
    }

    isRental(property: Property): boolean {
        return property.pricingInfos.businessType === 'RENTAL';
    }

    isSale(property: Property): boolean {
        return property.pricingInfos.businessType === 'SALE';
    }

    // ZAP
    isMinimumRentalValue(property: Property): boolean {
        return Number(property.pricingInfos.price) >= 3500;
    }

    isMinimumSaleValue(property: Property): boolean {
        return Number(property.pricingInfos.price) >= 600000;
    }

    isMinimumAreaValue(property: Property): boolean {
        return property.usableAreas > 0 && Number(property.pricingInfos.price) / property.usableAreas > 3500;
    }

    // VIVA REAL
    isMaximumRentalValue(property: Property): boolean {
        return Number(property.pricingInfos.monthlyCondoFee) > 0 && Number(property.pricingInfos.price) <= 4000;
    }

    isMaximumSaleValue(property: Property): boolean {
        return Number(property.pricingInfos.price) <= 700000;
    }

    isMaximumCondoFeeValue(property: Property): boolean {
        return Number(property.pricingInfos.monthlyCondoFee) / Number(property.pricingInfos.price) * 100 < 30;
    }

    isBoundingBox(property: Property): boolean {
        const { lon, lat } = property.address.geoLocation.location;
        return (lat <= -23.546686 && lat >= -23.568704) && (lon >= -46.693419 && lon <= -46.641146);
    }
}
