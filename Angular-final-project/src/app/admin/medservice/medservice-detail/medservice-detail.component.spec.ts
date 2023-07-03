import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedserviceDetailComponent } from './medservice-detail.component';

describe('MedserviceDetailComponent', () => {
  let component: MedserviceDetailComponent;
  let fixture: ComponentFixture<MedserviceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedserviceDetailComponent]
    });
    fixture = TestBed.createComponent(MedserviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
