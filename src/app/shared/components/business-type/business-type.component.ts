import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-business-type',
    templateUrl: './business-type.component.html',
    styleUrls: ['./business-type.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessTypeComponent implements OnInit {
    @Input() name: string;
    constructor() { }

    ngOnInit(): void {
    }
}
