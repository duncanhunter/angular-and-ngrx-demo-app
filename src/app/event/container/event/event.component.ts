import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Attendee } from '../../../models';
import { EventService } from '../../services/event.service';
import { State } from '../../../state/state';
import { StartSpinner, StopSpinner } from '../../../state/spinner/spinner.actions';
import { getSpinner } from '../../../state/spinner/spinner.selectors';
import { LoadAttendees } from '../../state/attendees/attendees.actions';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  spinner$: Observable<boolean>;
  attendees$: Observable<Attendee[]>;

  constructor(
    private store: Store<State>,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.spinner$ = this.store.pipe(select(getSpinner));
    this.attendees$ = this.store.pipe(select(state => state.))
    this.store.dispatch(new LoadAttendees());
  }

  addAttendee(attendee: Attendee) {
    this.store.dispatch(new StartSpinner());
    this.eventService.addAttendee(attendee).subscribe(() => {
      this.store.dispatch(new StopSpinner());
    });
  }
}
