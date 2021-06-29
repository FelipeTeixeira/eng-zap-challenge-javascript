import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { PropertyService } from './property.service';
import { Property } from '../model/property';
import { RegrasUtils } from '../utils/regras.util';


@Injectable()
export class PropertyResolver implements Resolve<Property[]> {

    constructor(
        private propertyService: PropertyService,
        private transferState: TransferState,
        private regrasUtils: RegrasUtils,
        @Inject(PLATFORM_ID) private platformId
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Property[]> {

        const PROPERTY_KEY = makeStateKey<Property[]>('propertyKey-olx-br');

        if (this.transferState.hasKey(PROPERTY_KEY)) {
            return of(this.transferState.get(PROPERTY_KEY, null));
        }
        else {
            const company = route.params['company'];

            return this.propertyService.findAll()
                .pipe(
                    first(),
                    tap(properties => {
                        const filterProperty = (item: Property) => {
                            const { pricingInfos, usableAreas, address } = item;
                            const { price, businessType, monthlyCondoFee } = pricingInfos;
                            const { lon, lat } = address.geoLocation.location;

                            let isAvailableForRental = false;
                            let isAvailableForSale = false;

                            if (company === 'zap-imoveis') {
                                // TO DO, ta errado
                                isAvailableForRental = false;

                                isAvailableForSale = this.regrasUtils.temLatLon(lon, lat)
                                    && this.regrasUtils.isSale(businessType)
                                    && this.regrasUtils.valorMinimoVenda(price)
                                    && this.regrasUtils.valorMinimoMetroQuadrado(price, usableAreas);
                            } else {
                                isAvailableForRental = this.regrasUtils.temLatLon(lon, lat)
                                    && this.regrasUtils.isRental(businessType)
                                    && this.regrasUtils.valorMaximoAluguel(price, monthlyCondoFee)
                                    && this.regrasUtils.valorLimitCondomio(price, monthlyCondoFee)

                                isAvailableForSale = this.regrasUtils.temLatLon(lon, lat)
                                    && this.regrasUtils.isSale(businessType)
                                    && this.regrasUtils.valorMaximoVenda(price)
                            }

                            return isAvailableForRental || isAvailableForSale;
                        }

                        this.transferState.set(PROPERTY_KEY, properties.filter(filterProperty));
                    })
                );
        }
    }
}

//
/*
    bug de quando entra na pagina,
    preciso salvar todos os dados de uma vez, quando entrar aqui gerar um array pro zap e um pro viva
*/
