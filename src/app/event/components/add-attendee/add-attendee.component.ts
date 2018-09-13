import { Component, EventEmitter, Output  } from '@angular/core';
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
    const attendee = {
      name: this.addAttendeeForm.value.name,
      attending: true,
      guests: 1
    };
    this.addAttendee.emit(attendee);
  }
}
