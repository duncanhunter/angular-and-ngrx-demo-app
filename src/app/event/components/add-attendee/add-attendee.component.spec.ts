import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddAttendeeComponent } from './add-attendee.component';
import { Attendee } from '../../../models';

describe('AddAttendeeComponent', () => {
  let component: AddAttendeeComponent;
  let fixture: ComponentFixture<AddAttendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddAttendeeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form', () => {
    component.addAttendeeForm.controls.name.setValue('Duncan');
    expect(component.addAttendeeForm.valid).toEqual(true);
  });

  it('should have an invalid form on load', () => {
    expect(component.addAttendeeForm.valid).toEqual(false);
  });

  it('should emit an attendee', async(() => {
    component.addAttendeeForm.controls.name.setValue('Duncan');
    component.addAttendee.subscribe((attendee: Attendee) => {
      expect(attendee.name).toEqual('Duncan');
    });
    component.submit();
  }));

});
