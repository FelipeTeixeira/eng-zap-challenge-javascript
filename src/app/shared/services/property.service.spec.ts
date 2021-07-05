import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PropertyService } from './property.service';
import { TransferState } from '@angular/platform-browser';
import { Property } from '../model/property';
import { HttpClientModule } from '@angular/common/http';

const propertiesData: Property[] = [
    {
        usableAreas: 69,
        listingType: "USED",
        createdAt: "2016-11-16T04:14:02Z",
        listingStatus: "ACTIVE",
        id: "a0f9d9647551",
        parkingSpaces: 1,
        updatedAt: "2016-11-16T04:14:02Z",
        owner: false,
        images: [
            "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/285805119ab0761500127aebd8ab0e1d.jpg",
            "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/4af1656b66b9e12efff6ce06f51926f6.jpg",
            "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/895f0d4ce1e641fd5c3aad48eff83ac8.jpg",
            "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/e7b5cce2d9aee78867328dfa0a7ba4c6.jpg",
            "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/d833da4cdf6b25b7acf3ae0710d3286d.jpg"
        ],
        address: {
            city: "",
            neighborhood: "",
            geoLocation: {
                precision: "ROOFTOP",
                location: {
                    lon: -46.716542,
                    lat: -23.502555
                }
            }
        },
        bathrooms: 2,
        bedrooms: 3,
        pricingInfos: {
            yearlyIptu: "0",
            price: "405000",
            businessType: "SALE",
            monthlyCondoFee: "495"
        }
    },
    {
        usableAreas: 70,
        listingType: "USED",
        createdAt: "2017-04-22T18:39:31.138Z",
        listingStatus: "ACTIVE",
        id: "7baf2775d4a2",
        parkingSpaces: 1,
        updatedAt: "2017-04-22T18:39:31.138Z",
        owner: false,
        images: [
            "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
            "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg",
            "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg",
            "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
            "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg"
        ],
        address: {
            city: "",
            neighborhood: "",
            geoLocation: {
                precision: "NO_GEOCODE",
                location: {
                    lon: 0,
                    lat: 0
                }
            }
        },
        bathrooms: 1,
        bedrooms: 2,
        pricingInfos: {
            yearlyIptu: "60",
            price: "276000",
            businessType: "SALE",
            monthlyCondoFee: "0"
        }
    }
]

describe('PropertyService', () => {
    let injector: TestBed;
    let service: PropertyService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                HttpClientModule
            ],
            providers: [
                PropertyService,
                TransferState
            ],
        });

        injector = getTestBed();
        service = TestBed.inject(PropertyService);
        httpMock = injector.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('findAll() should return data', () => {
        service.findAll().subscribe((res) => {
            expect(res).toEqual(propertiesData);
        });

        const req = httpMock.expectOne('http://localhost:4200/api/properties');
        expect(req.request.method).toBe('GET');
        req.flush(propertiesData);
    });

    it('getStateKey() should return Key', () => {
        const PROPERTY_KEY = service.getStateKey('viva-real');
        const transferState = new TransferState();
        transferState.set(PROPERTY_KEY, propertiesData);

        expect(transferState.hasKey(PROPERTY_KEY)).toBeTrue();
    });
});
