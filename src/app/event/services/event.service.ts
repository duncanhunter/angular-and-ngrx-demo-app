import { Injectable } from '@angular/core';
import { Attendee } from '../../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getAttendees(): Observable<Attendee[]> {
    return this.httpClient.get<Attendee[]>('/api/attendees');
  }

  addAttendee(attendee: Attendee): Observable<Attendee> {
    return this.httpClient.post<Attendee>('/api/attendees', attendee);
  }
}
