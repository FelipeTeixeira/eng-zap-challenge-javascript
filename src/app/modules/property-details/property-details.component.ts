import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from 'src/app/shared/model/property';
import { MetaTagSeoService } from 'src/app/shared/services/meta-tag-seo.service';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
    property$: Observable<Property>;
    propertiesSimilar$: Observable<Property[]>;
    propertyId: string;
    companySelected: string;
    pagePagination: number;

    constructor(
        private propertyService: PropertyService,
        private activatedRoute: ActivatedRoute,
        private metaTagSeoService: MetaTagSeoService,
        private currencyPipe: CurrencyPipe,
        private datePipe: DatePipe,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.companySelected = this.activatedRoute.snapshot.params['company'];
        this.propertyId = this.activatedRoute.snapshot.params['propertyId'];

        this.property$ = this.propertyService.findProperty(this.propertyId, this.companySelected);
        this.propertiesSimilar$ = this.propertyService.findPropertiesSimilar(this.propertyId, this.companySelected);

        this.property$.subscribe(response => {
            this.setTags(response);
        });

        if (this.activatedRoute.snapshot.queryParams.page) {
            this.pagePagination = this.activatedRoute.snapshot.queryParams.page;
        }
    }

    setTags(property: Property) {
        const title = `${this.currencyPipe.transform(property?.pricingInfos.price)} - ${property?.address?.city}, ${property?.address?.neighborhood}`;
        const description = `Imóvel em ${property?.address?.city}. Publicado em ${this.datePipe.transform(property?.updatedAt, 'dd MMMM HH:mm')}`;

        this.metaTagSeoService.setMetaTags(title, description);
    }

    backProperties() {
        this.router.navigate(['/empresa/', this.companySelected], {
            queryParams: {
                page: this.pagePagination
            }
        });
    }
}
