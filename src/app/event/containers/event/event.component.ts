import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Attendee } from '../../../models';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  spinner$: Observable<boolean>;
  attendees$: Observable<Attendee[]>;

  constructor(private store: Store<any>, private eventService: EventService) {}

  ngOnInit() {
    this.getAttendees();
    this.spinner$ = this.store.pipe(select(state => state.spinner.isOn));
  }

  getAttendees() {
    this.attendees$ = this.eventService.getAttendees();
  }

  addAttendee(attendee: Attendee) {
    this.store.dispatch({ type: 'startSpinner' });
    this.eventService.addAttendee(attendee).subscribe(() => {
      this.store.dispatch({ type: 'stopSpinner' });
      this.getAttendees();
    });
  }
}
