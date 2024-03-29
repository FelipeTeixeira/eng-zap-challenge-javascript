import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MetaTagSeoService } from '../../shared/services/meta-tag-seo.service';
import { Property } from '../../shared/model/property';

@Component({
    selector: 'app-properties',
    templateUrl: './properties-list.component.html',
    styleUrls: ['./properties-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertiesListComponent implements OnInit, AfterViewInit {
    currentPage: number = 1;
    properties: Property[] = [];
    companySelected: 'vival-real' | 'zap-imoveis';

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private viewportScroller: ViewportScroller,
        private metaTagSeoService: MetaTagSeoService
    ) { }

    ngOnInit() {
        this.properties = this.activatedRoute.snapshot.data['resolvedProperties'];
        this.companySelected = this.activatedRoute.snapshot.params['company'];

        if (this.activatedRoute.snapshot.queryParams.page) {
            this.currentPage = this.activatedRoute.snapshot.queryParams.page;
        }
        this.setTags(this.companySelected);
    }

    ngAfterViewInit() {
        this.activatedRoute.fragment.pipe(
            first()
        ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
    }

    setPageSelect(page: number) {
        this.currentPage = page;

        this.router.navigate([],
            {
                queryParams: {
                    page: this.currentPage
                },
            }
        );
    }

    setTags(company: string) {
        const title = `Os melhores imóveis à venda ou aluguel no Brasil`;
        const description = `No ${company === 'zap-imoveis' ? 'Zap Imóveis' : 'Viva real'} você encontra casas e apartamentos novos e usados para compra, venda ou aluguel em SP e no Brasil`;

        this.metaTagSeoService.setMetaTags(title, description);
    }

    backHome() {
        this.router.navigate(['/']);
    }
}
