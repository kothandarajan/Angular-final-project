import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedserviceNewComponent } from './medservice-new.component';

describe('MedserviceNewComponent', () => {
  let component: MedserviceNewComponent;
  let fixture: ComponentFixture<MedserviceNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedserviceNewComponent]
    });
    fixture = TestBed.createComponent(MedserviceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
