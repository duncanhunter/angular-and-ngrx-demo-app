import * as fromAttendees from './attendees/attendees.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface EventState {
  attendees: fromAttendees.State;
}

export const reducers: ActionReducerMap<EventState> = {
  attendees: fromAttendees.reducer
};
