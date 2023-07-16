import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfieComponent } from './add-selfie.component';

describe('AddSelfieComponent', () => {
  let component: AddSelfieComponent;
  let fixture: ComponentFixture<AddSelfieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSelfieComponent]
    });
    fixture = TestBed.createComponent(AddSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
