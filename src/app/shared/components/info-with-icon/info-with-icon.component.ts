import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-with-icon',
    templateUrl: './info-with-icon.component.html',
    styleUrls: ['./info-with-icon.component.scss']
})
export class InfoWithIconComponent implements OnInit {
    @Input() description: string;
    @Input() imgAlt: string;
    @Input() icon: string;
    @Input() type: 'round';

    constructor() { }

    ngOnInit(): void {
    }
}
