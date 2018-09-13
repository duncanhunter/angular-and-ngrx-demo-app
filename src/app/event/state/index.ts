import { ActionReducerMap } from '@ngrx/store';
import { Effect } from '@ngrx/effects';

import * as fromRoot from './../../state/state';
import * as fromAttendees from './attendees/attendees.reducer';
import { AttendeesEffects } from './attendees/attendees.effects';

export interface EventState extends fromRoot.State {
  attendees: fromAttendees.State;
}

export const reducers: Partial<ActionReducerMap<EventState>> = {
  attendees: fromAttendees.reducer
};

export const effects: any[] = [AttendeesEffects];
