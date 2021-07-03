import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWithIconComponent } from './info-with-icon.component';

describe('InfoWithIconComponent', () => {
    let component: InfoWithIconComponent;
    let fixture: ComponentFixture<InfoWithIconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InfoWithIconComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoWithIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
