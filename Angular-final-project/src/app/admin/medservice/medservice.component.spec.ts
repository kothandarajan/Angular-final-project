import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedserviceComponent } from './medservice.component';

describe('MedserviceComponent', () => {
  let component: MedserviceComponent;
  let fixture: ComponentFixture<MedserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedserviceComponent]
    });
    fixture = TestBed.createComponent(MedserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
