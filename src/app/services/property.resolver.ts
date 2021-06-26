import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { PropertyService } from './property.service';
import { Property } from '../model/property';


@Injectable()
export class PropertyResolver implements Resolve<Property> {

    constructor(
        private propertyService: PropertyService,
        private transferState: TransferState,
        @Inject(PLATFORM_ID) private platformId
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Property> {

        const propertyId = route.params['id'];

        const PROPERTY_KEY = makeStateKey<Property>('propertyKey-' + propertyId);

        if (this.transferState.hasKey(PROPERTY_KEY)) {

            const property = this.transferState.get(PROPERTY_KEY, null);

            this.transferState.remove(PROPERTY_KEY);

            return of(property);
        }
        else {
            // return this.propertyService.findCourseById(propertyId)
            //     .pipe(
            //         first(),
            //         tap(property => {
            //             if (isPlatformServer(this.platformId)) {
            //                 this.transferState.set(PROPERTY_KEY, property);
            //             }
            //         })
            //     );
        }
    }

}
