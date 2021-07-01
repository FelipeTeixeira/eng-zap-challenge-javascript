import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-details-with-icon',
    templateUrl: './details-with-icon.component.html',
    styleUrls: ['./details-with-icon.component.scss']
})
export class DetailsWithIconComponent implements OnInit {
    @Input() description: string;
    @Input() icon: string;

    constructor() { }

    ngOnInit(): void {
    }

}
