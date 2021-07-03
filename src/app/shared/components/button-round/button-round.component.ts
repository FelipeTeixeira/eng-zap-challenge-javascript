import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button-round',
    templateUrl: './button-round.component.html',
    styleUrls: ['./button-round.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonRoundComponent implements OnInit {
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    onClick() {
        this.clicked.emit();
    }
}
