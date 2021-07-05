import { TestBed, getTestBed } from '@angular/core/testing';
import { Property } from '../model/property';
import { PropertiesResolver } from '../services/properties.resolver';
import PropertyRulesUtils from './property-rules.util';

const propertyData: Property = {
    usableAreas: 77,
    listingType: "USED",
    createdAt: "2018-05-08T00:29:38.179Z",
    listingStatus: "ACTIVE",
    id: "fed26dbe5881",
    parkingSpaces: 1,
    updatedAt: "2018-05-08T00:29:38.179Z",
    owner: false,
    images: [
        "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg",
        "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg",
        "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
        "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
        "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg"
    ],
    address: {
        city: "São Paulo",
        neighborhood: "Campo Belo",
        geoLocation: {
            precision: "ROOFTOP",
            location: {
                lon: -46.659002,
                lat: -23.553518
            }
        }
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
        period: "MONTHLY",
        yearlyIptu: "810",
        price: "3500",
        rentalTotalPrice: "4440",
        businessType: "RENTAL",
        monthlyCondoFee: "940"
    }
};

describe('PropertyService', () => {
    let injector: TestBed;
    let service: PropertyRulesUtils;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PropertyRulesUtils,
                PropertiesResolver
            ],
        });

        injector = getTestBed();
        service = TestBed.inject(PropertyRulesUtils);
    });

    it('hasLatLon() should return true', () => {
        const status = service.hasLatLon(propertyData);
        expect(status).toBeTrue();
    })

    it('isRental() should return true', () => {
        const status = service.isRental(propertyData);
        expect(status).toBeTrue();
    })

    it('isSale() should return true', () => {
        const status = service.isSale(propertyData);
        expect(status).toBeFalse();
    })

    it('isMinimumRentalValue() should return true', () => {
        const status = service.isMinimumRentalValue(propertyData);
        expect(status).toBeTrue();
    })

    it('isMinimumSaleValue() should return true', () => {
        const status = service.isMinimumSaleValue(propertyData);
        expect(status).toBeFalse();
    })

    it('isMinimumAreaValue() should return true', () => {
        const status = service.isMinimumAreaValue(propertyData);
        expect(status).toBeFalse();
    })

    it('isMaximumRentalValue() should return true', () => {
        const status = service.isMaximumRentalValue(propertyData);
        expect(status).toBeTrue();
    })

    it('isMaximumSaleValue() should return true', () => {
        const status = service.isMaximumSaleValue(propertyData);
        expect(status).toBeTrue();
    })

    it('isMaximumCondoFeeValue() should return true', () => {
        const status = service.isMaximumCondoFeeValue(propertyData);
        expect(status).toBeTrue();
    })

    it('isBoundingBox() should return true', () => {
        const status = service.isBoundingBox(propertyData);
        expect(status).toBeTrue();
    })
});
