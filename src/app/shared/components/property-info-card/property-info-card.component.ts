import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Address } from '../../model/property';

@Component({
    selector: 'app-property-info-card',
    templateUrl: './property-info-card.component.html',
    styleUrls: ['./property-info-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyInfoCardComponent implements OnInit {
    @Input() images: string[];
    @Input() price: number;
    @Input() monthlyCondoFee: number;
    @Input() businessType: 'RENTAL' | 'SALE';
    @Input() address: Address;
    @Input() usableAreas: number;

    constructor() { }

    ngOnInit(): void {
    }

}
