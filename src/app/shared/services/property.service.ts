import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Property } from '../model/property';
import { environment } from '../../../environments/environment';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

@Injectable()
export class PropertyService {
    constructor(
        private http: HttpClient,
        private transferState: TransferState,
    ) { }

    findAll(): Observable<Property[]> {
        return this.http.get<Property[]>(`${environment.baseUrl}/api/properties`);
    }

    findProperty(propertyId: string, company: string): Observable<Property> {
        const PROPERTY_KEY = this.getStateKey(company);

        const properties = this.transferState.get(PROPERTY_KEY, null);
        const propertySelected = properties.find(item => item.id === propertyId);
        return of(propertySelected);
    }

    findPropertiesSimilar(propertyId: string, company: string, qty = 3): Observable<Property[]> {
        const PROPERTY_KEY = this.getStateKey(company);

        const properties = this.transferState.get(PROPERTY_KEY, null);
        const propertySelected = properties.find(item => item.id === propertyId);

        const propertiesSimilar: Property[] = [];

        properties.forEach(item => {
            propertiesSimilar.length < qty
                && item.id !== propertySelected.id
                && item.pricingInfos.businessType === propertySelected.pricingInfos.businessType

                && propertiesSimilar.push(item);
        });

        return of(propertiesSimilar);
    }

    getStateKey(company: string): StateKey<Property[]> {
        return makeStateKey<Property[]>(`propertyKey-${company}`);;
    }
}
