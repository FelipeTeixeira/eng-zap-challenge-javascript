import { Component, OnInit } from '@angular/core';
import { CanonicalService } from './shared/services/canonical.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private canonicalService: CanonicalService
    ) {}

    ngOnInit() {
        this.canonicalService.setCanonicalURL();
    }
 }
