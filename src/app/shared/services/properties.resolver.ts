import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { TransferState } from '@angular/platform-browser';
import { PropertyService } from './property.service';
import { Property } from '../model/property';
import PropertyRulesUtils from '../utils/property-rules.util';

@Injectable()
export class PropertiesResolver implements Resolve<Property[]> {
    private predicates: any = {
        'zap-imoveis': (item: Property) => {
            const isAvailableForRental = this.utils.hasLatLon(item)
                && this.utils.isRental(item)
                && this.utils.isMinimumRentalValue(item)

            const isAvailableForSale = this.utils.hasLatLon(item)
                && this.utils.isSale(item)
                && this.utils.isMinimumSaleValue(item)
                && this.utils.isMinimumAreaValue(item);

            if (isAvailableForSale && this.utils.isBoundingBox(item)) {
                item.pricingInfos.price = Math.abs((10 / 100 - 1) * Number(item.pricingInfos.price));
            }

            return isAvailableForRental || isAvailableForSale;
        },

        'viva-real': (item: Property) => {
            const isAvailableForRental = this.utils.hasLatLon(item)
                && this.utils.isRental(item)
                && this.utils.isMaximumRentalValue(item)
                && this.utils.isMaximumCondoFeeValue(item);

            const isAvailableForSale = this.utils.hasLatLon(item)
                && this.utils.isSale(item)
                && this.utils.isMaximumSaleValue(item);

            if (isAvailableForRental && this.utils.isBoundingBox(item)) {
                item.pricingInfos.price = ((30 / 100) + 1) * Number(item.pricingInfos.price);
            }

            return isAvailableForRental || isAvailableForSale;
        }
    }

    constructor(
        private propertyService: PropertyService,
        private transferState: TransferState,
        private utils: PropertyRulesUtils
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot
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
