import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * List of classes to add to Button instances based on host attributes to
 * style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES = [
    'zap-button'
];

@Component({
    selector: 'button[zap-button], a[zap-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
    @Input() color: 'white' | 'primary' = 'white';
    constructor(
        private elementRef: ElementRef
    ) { }

    ngOnInit() {
        this.getHostElement().classList.add(`zap--${this.color}`);

        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this.hasHostAttributes(attr)) {
                this.getHostElement().classList.add(attr);
            }
        }
    }

    private getHostElement(): HTMLElement {
        return this.elementRef.nativeElement;
    }

    private hasHostAttributes(...attributes: string[]): boolean {
        return attributes.some(attribute => this.getHostElement().hasAttribute(attribute));
    }
}
