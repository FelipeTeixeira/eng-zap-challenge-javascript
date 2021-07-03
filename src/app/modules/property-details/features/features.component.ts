import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/model/property';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
    @Input() property: Property;

    constructor() { }

    ngOnInit(): void {
    }

}
