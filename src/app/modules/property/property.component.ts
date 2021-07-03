import { Component, OnInit } from '@angular/core';
import { PropertiesComponent } from './properties/properties.component';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
})
export class PropertyComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}
