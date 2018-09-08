import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Attendee } from '../../../models';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.scss']
})
export class AddAttendeeComponent {
  @Output()
  addAttendee = new EventEmitter<Attendee>();

  addAttendeeForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  submit() {
    // debugger;
    this.addAttendee.emit(this.addAttendeeForm.value);
  }
}
