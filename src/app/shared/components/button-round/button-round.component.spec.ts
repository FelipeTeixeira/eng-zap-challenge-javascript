import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRoundComponent } from './button-round.component';

describe('ButtonRoundComponent', () => {
    let component: ButtonRoundComponent;
    let fixture: ComponentFixture<ButtonRoundComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonRoundComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonRoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`#${ButtonRoundComponent.prototype.onClick.name}
    should trigger (@Output clicked) when called`, () => {
        spyOn(component.clicked, 'emit');
        fixture.detectChanges();
        component.onClick();
        expect(component.clicked.emit).toHaveBeenCalled();
    });
});
