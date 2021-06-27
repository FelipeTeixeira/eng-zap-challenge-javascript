import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../../shared/model/property';

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

    properties: Property[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.properties = this.activatedRoute.snapshot.data["property"];
    }

}
