import { Component } from '@angular/core';
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
  addAttendeeForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  submit() {
    const attendee = {
      name: this.addAttendeeForm.value.name,
      attending: true,
      guests: 0
    };
    console.log('TCL: AddAttendeeComponent -> submit -> attendee', attendee);
  }
}
