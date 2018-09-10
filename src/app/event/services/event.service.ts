import { Injectable } from '@angular/core';
import { Attendee } from '../../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() {}

  getAttendees(): Observable<Attendee[]> {
    return of([
      {
        name: 'Duncan',
        attending: true,
        guests: 0
      }
    ] as Attendee[]);
  }
}
