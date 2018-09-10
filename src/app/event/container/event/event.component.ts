import { Component, OnInit } from '@angular/core';
import { Attendee } from '../../../models';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  attendees: Attendee[] = [];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getAttendees();
  }

  getAttendees(){
    this.eventService.getAttendees().subscribe(attendees => this.attendees = attendees);
  }

  addAttendee(attendee: Attendee) {
    this.attendees = [...this.attendees, attendee];
    console.log(
      'TCL: EventComponent -> addAttendee -> this.attendees',
      this.attendees
    );
  }
}
