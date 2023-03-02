import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotNghiepComponent } from './tot-nghiep.component';

describe('TotNghiepComponent', () => {
  let component: TotNghiepComponent;
  let fixture: ComponentFixture<TotNghiepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotNghiepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
