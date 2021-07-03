import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { PropertyService } from './property.service';
import { Property } from '../model/property';
import {
    hasLatLon,
    isRental,
    isSale,
    isMinimumRentalValue,
    isMinimumSaleValue,
    isMinimumAreaValue,
    isMaximumRentalValue,
    isMaximumSaleValue,
    isMaximumCondoFeeValue,
    isBoundingBox
} from '../utils/property-rules.util';

@Injectable()
export class PropertiesResolver implements Resolve<Property[]> {
    private predicates = {
        'zap-imoveis': (item: Property) => {
            const isAvailableForRental = hasLatLon(item)
                && isRental(item)
                && isMinimumRentalValue(item)

            const isAvailableForSale = hasLatLon(item)
                && isSale(item)
                && isMinimumSaleValue(item)
                && isMinimumAreaValue(item);

            if (isAvailableForSale && isBoundingBox(item)) {
                item.pricingInfos.price = Math.abs((10 / 100 - 1) * Number(item.pricingInfos.price));
            }

            return isAvailableForRental || isAvailableForSale;
        },

        'viva-real': (item: Property) => {
            const isAvailableForRental = hasLatLon(item)
                && isRental(item)
                && isMaximumRentalValue(item)
                && isMaximumCondoFeeValue(item);

            const isAvailableForSale = hasLatLon(item)
                && isSale(item)
                && isMaximumSaleValue(item);

            if (isAvailableForRental && isBoundingBox(item)) {
                item.pricingInfos.price = ((30 / 100) + 1) * Number(item.pricingInfos.price);
            }

            return isAvailableForRental || isAvailableForSale;
        }
    }

    constructor(
        private propertyService: PropertyService,
        private transferState: TransferState,
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Property[]> {

        const company = route.params['company'];
        const PROPERTY_KEY = this.propertyService.getStateKey(company);

        if (this.transferState.hasKey(PROPERTY_KEY)) {
            return of(this.transferState.get(PROPERTY_KEY, null));
        }
        else {
            return this.propertyService.findAll()
                .pipe(
                    first(),
                    map(properties => {
                        const propertiesFiltered = properties.filter(this.predicates[company]);
                        this.transferState.set(PROPERTY_KEY, propertiesFiltered);
                        return propertiesFiltered;
                    })
                );
        }
    }
}
