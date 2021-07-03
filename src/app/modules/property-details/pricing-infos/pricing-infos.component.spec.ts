import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingInfosComponent } from './pricing-infos.component';

describe('PricingInfosComponent', () => {
  let component: PricingInfosComponent;
  let fixture: ComponentFixture<PricingInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
