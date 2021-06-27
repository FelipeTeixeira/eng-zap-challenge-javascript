import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
    selectedCompany: 'zap-imoveis' | 'viva-real' = 'viva-real';

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }

    onActivate(event: PropertiesComponent) {
        // ActivatedRoute
        // console.log(event);
    }
}
