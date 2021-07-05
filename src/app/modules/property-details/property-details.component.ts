import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Property } from 'src/app/shared/model/property';
import { MetaTagSeoService } from 'src/app/shared/services/meta-tag-seo.service';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailsComponent implements OnInit {
    property$: Observable<Property>;
    propertiesSimilar$: Observable<Property[]>;
    propertyId: string;
    companySelected: string;
    currentPage: number;

    constructor(
        private propertyService: PropertyService,
        private activatedRoute: ActivatedRoute,
        private metaTagSeoService: MetaTagSeoService,
        private currencyPipe: CurrencyPipe,
        private datePipe: DatePipe,
        private router: Router
    ) { }

    ngOnInit() {
        this.property$ = this.activatedRoute.params.pipe(
            switchMap(params => {
                this.propertyId = params['propertyId'];
                this.companySelected = params['company'];

                return this.propertyService.findProperty(params['propertyId'], params['company']);
            }),
            tap((property) => {
                this.propertiesSimilar$ = this.propertyService.findPropertiesSimilar(this.propertyId, this.companySelected);
                this.setTags(property);
            })
        );

        const queryParamsPage = this.activatedRoute.snapshot.queryParams.page;
        this.currentPage = queryParamsPage ? queryParamsPage : 1;
    }

    setTags(property: Property) {
        const title = `${this.currencyPipe.transform(property?.pricingInfos.price)} - ${property?.address?.city}, ${property?.address?.neighborhood}`;
        const description = `Imóvel em ${property?.address?.city}. Publicado em ${this.datePipe.transform(property?.updatedAt, 'dd MMMM HH:mm')}`;

        this.metaTagSeoService.setMetaTags(title, description);
    }

    backProperties() {
        this.router.navigate(['/empresa/', this.companySelected], {
            queryParams: {
                page: this.currentPage
            },
            fragment: this.propertyId
        });
    }
}
