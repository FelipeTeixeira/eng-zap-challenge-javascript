import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() clickedButton: EventEmitter<any> = new EventEmitter();
    @Input() isZapImoveis: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    onClickButtonBack() {
        this.clickedButton.emit();
    }
}
