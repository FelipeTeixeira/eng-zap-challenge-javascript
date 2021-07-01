import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { PropertiesComponent } from './properties.component';

describe('PropertiesComponent', () => {
    let component: PropertiesComponent;
    let fixture: ComponentFixture<PropertiesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PropertiesComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                SharedModule
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PropertiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
