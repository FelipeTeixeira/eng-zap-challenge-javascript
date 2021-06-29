import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Property } from '../model/property';

@Injectable()
export class PropertyDetailsResolver implements Resolve<Property> {

    constructor(
        private transferState: TransferState,
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Property> {
        const propertyId = route.params['propertyId'];
        const PROPERTY_KEY = makeStateKey<Property[]>('propertyKey-olx-br');

        if (this.transferState.hasKey(PROPERTY_KEY)) {
            const properties = this.transferState.get(PROPERTY_KEY, null);
            const propertySelected = properties.find(item => item.id === propertyId);
            return of(propertySelected);
        }
        // TO DO - trazer 3 imoveis de outras cidades
    }
}
