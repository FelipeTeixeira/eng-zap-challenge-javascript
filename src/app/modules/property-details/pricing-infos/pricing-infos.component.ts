import { Component, Input, OnInit } from '@angular/core';
import { PricingInfos } from 'src/app/shared/model/property';

@Component({
    selector: 'app-pricing-infos',
    templateUrl: './pricing-infos.component.html',
    styleUrls: ['./pricing-infos.component.scss']
})
export class PricingInfosComponent implements OnInit {
    @Input() pricingInfos: PricingInfos;

    constructor() { }

    ngOnInit() {
    }

}
