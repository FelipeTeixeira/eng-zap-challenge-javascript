import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { PropertiesListComponent } from './properties-list.component';

describe('PropertiesListComponent', () => {
    let component: PropertiesListComponent;
    let fixture: ComponentFixture<PropertiesListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PropertiesListComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                SharedModule
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PropertiesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
