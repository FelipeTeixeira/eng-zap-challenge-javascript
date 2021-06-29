import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Property } from '../../../shared/model/property';

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit, AfterViewInit {
    currentPage: number = 1;
    properties: Property[] = [];
    companySelected: 'vival-real' | 'zap-imoveis';

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private viewportScroller: ViewportScroller
    ) { }

    ngOnInit(): void {
        this.properties = this.activatedRoute.snapshot.data['properties'];
        this.companySelected = this.activatedRoute.snapshot.params['company'];

        if (this.activatedRoute.snapshot.queryParams.page) {
            this.currentPage = this.activatedRoute.snapshot.queryParams.page;
        }
    }

    ngAfterViewInit(): void {
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
}
