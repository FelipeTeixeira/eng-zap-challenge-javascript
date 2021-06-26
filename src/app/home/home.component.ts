import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PropertyService } from '../services/property.service';
import { Property } from '../model/property';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    properties$: Observable<Property[]>;

    constructor(
        private propertyService: PropertyService,
        private title: Title
    ) { }

    ngOnInit() {
        // TO DO - nome pagina
        this.title.setTitle('nome');
        this.properties$ = this.propertyService.findAll();
    }
}
