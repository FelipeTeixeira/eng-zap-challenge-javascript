import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PropertyDetailsComponent } from './property-details.component';
import { ActivatedRoute } from '@angular/router';
import { MetaTagSeoService } from 'src/app/shared/services/meta-tag-seo.service';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PropertyDetailsComponent', () => {
    let component: PropertyDetailsComponent;
    let fixture: ComponentFixture<PropertyDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PropertyDetailsComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                SharedModule
            ],
            providers:
                [
                    {
                        provide: ActivatedRoute,
                        useValue: {
                            snapshot: { params: { company: 'viva-real' } },
                        },
                    },
                    {
                        provide: ActivatedRoute,
                        useValue: {
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
                        },
                    },
                    {
                        provite: MetaTagSeoService,
                        useValue: {
                            title: 'Titulo',
                            description: 'Descrição'
                        }
                    }
                ],

        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PropertyDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
