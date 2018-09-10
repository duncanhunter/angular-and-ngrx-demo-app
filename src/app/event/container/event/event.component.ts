import { Component, OnInit } from '@angular/core';
import { Attendee } from '../../../models';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  addAttendee(attendee: Attendee) {
    console.log('TCL: EventComponent -> addAttendee -> attendee', attendee);
  }
}
