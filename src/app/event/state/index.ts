import { ActionReducerMap } from '@ngrx/store';

import * as fromRoot from './../../state/state';
import * as fromAttendees from './attendees/attendees.reducer';

export interface EventState extends fromRoot.State {
  attendees: fromAttendees.State;
}

export const reducers: Partial<ActionReducerMap<EventState>> = {
  attendees: fromAttendees.reducer
};
