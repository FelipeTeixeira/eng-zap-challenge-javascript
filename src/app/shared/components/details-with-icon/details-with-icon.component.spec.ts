import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWithIconComponent } from './details-with-icon.component';

describe('DetailsWithIconComponent', () => {
  let component: DetailsWithIconComponent;
  let fixture: ComponentFixture<DetailsWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
