import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PluralPipe } from 'src/app/shared/pipes/plural.pipe';

import { FeaturesComponent } from './features.component';

describe('FeaturesComponent', () => {
    let component: FeaturesComponent;
    let fixture: ComponentFixture<FeaturesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                FeaturesComponent,
                PluralPipe
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeaturesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
