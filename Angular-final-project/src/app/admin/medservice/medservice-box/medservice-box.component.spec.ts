import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedserviceBoxComponent } from './medservice-box.component';

describe('MedserviceBoxComponent', () => {
  let component: MedserviceBoxComponent;
  let fixture: ComponentFixture<MedserviceBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedserviceBoxComponent]
    });
    fixture = TestBed.createComponent(MedserviceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
