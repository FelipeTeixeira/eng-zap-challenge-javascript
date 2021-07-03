import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/shared/model/property';
import { MetaTagSeoService } from 'src/app/shared/services/meta-tag-seo.service';

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
    property: Property;
    propertiesSimilar: Property[];
    companySelected: string;
    pagePagination: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private metaTagSeoService: MetaTagSeoService,
        private currencyPipe: CurrencyPipe,
        private datePipe: DatePipe,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.companySelected = this.activatedRoute.snapshot.params['company'];
        this.property = this.activatedRoute.snapshot.data['resolvedProperty'];
        // this.property = res['resolvedProperty'];

        this.activatedRoute.data.subscribe(res => {
            this.propertiesSimilar = res['resolvedPropertiesSimilar'];
            this.setTags(this.property);
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
