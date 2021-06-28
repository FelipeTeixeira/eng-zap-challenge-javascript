import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/model/property';

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
    property: Property = {
        listingType: "USED",
        createdAt: "2018-05-08T00:29:38.179Z",
        listingStatus: "ACTIVE",
        id: "fed26dbe5881",
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

        pricingInfos: {
            period: "MONTHLY",
            yearlyIptu: "810",
            price: "3500",
            rentalTotalPrice: "4440",
            businessType: "RENTAL",
            monthlyCondoFee: "940"
        },

        // ja foi
        usableAreas: 77,
        bathrooms: 3,
        bedrooms: 3,
        parkingSpaces: 1,
        updatedAt: "2018-05-08T00:29:38.179Z",
    };

    constructor() { }

    ngOnInit(): void {
    }

}
