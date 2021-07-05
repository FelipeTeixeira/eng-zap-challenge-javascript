import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { PropertyDetailsComponent } from './property-details.component';
import { ActivatedRoute } from '@angular/router';
import { PropertyDetailsModule } from './property-details.module';
import { HttpClientModule } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';
import { PropertyService } from 'src/app/shared/services/property.service';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PropertyDetailsComponent', () => {
    let component: PropertyDetailsComponent;
    let fixture: ComponentFixture<PropertyDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PropertyDetailsComponent],
            imports: [
                PropertyDetailsModule,
                HttpClientModule,
                RouterTestingModule,
                SharedModule
            ],
            providers: [
                {
                    provide: TransferState,
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            params: { company: 'viva-real', id: 'a0f9d9647551' },
                            queryParams: { page: 2 }
                        },
                    },
                },
                {
                    provide: PropertyService
                }
            ],

        }).compileComponents();

        fixture = TestBed.createComponent(PropertyDetailsComponent);
        component = fixture.componentInstance;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
