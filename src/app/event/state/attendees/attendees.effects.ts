import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { switchMap, map, catchError, filter, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { EventService } from '../../services/event.service';
import {
  AttendeesActionTypes,
  LoadAttendees,
  LoadAttendeesSuccess,
  LoadAttendeesFail,
  AddAttendee,
  AddAttendeeSuccess,
  AddAttendeeFail,
  FilterBy
} from './attendees.actions';
import { Attendee } from '../../../models';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { RouterNavigationAction } from '@ngrx/router-store';
import { RouterNavigationPayload } from '@ngrx/router-store';

@Injectable()
export class AttendeesEffects {
  constructor(private actions$: Actions, private eventService: EventService) {}

  @Effect()
  getAttendees$ = this.actions$.pipe(
    ofType(AttendeesActionTypes.LoadAttendees),
    switchMap((action: LoadAttendees) =>
      this.eventService.getAttendees().pipe(
        map((attendees: Attendee[]) => new LoadAttendeesSuccess(attendees)),
        catchError(error => of(new LoadAttendeesFail(error)))
      )
    )
  );

  @Effect()
  addAttendee$ = this.actions$.pipe(
    ofType(AttendeesActionTypes.AddAttendee),
    switchMap((action: AddAttendee) =>
      this.eventService.addAttendee(action.payload).pipe(
        map((attendee: Attendee) => new AddAttendeeSuccess(attendee)),
        catchError(error => of(new AddAttendeeFail(error)))
      )
    )
  );

  @Effect()
  loadDiaryHealthActions$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((r: RouterNavigationAction) => ({
      url: r.payload.routerState.url,
      filterBy: r.payload.routerState.root.queryParams['filterBy']
    })),
    filter(({ url, filterBy }) => url.startsWith('/event')),
    map(({ filterBy }) => new FilterBy(filterBy))
  );
}
