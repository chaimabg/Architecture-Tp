import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineScheduleComponent } from './vaccine-schedule.component';

describe('VaccineScheduleComponent', () => {
  let component: VaccineScheduleComponent;
  let fixture: ComponentFixture<VaccineScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
