import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAttendee from './../attendees/attendees.reducer';
import { EventState } from '..';

export const getEventState = createFeatureSelector<EventState>('event');
export const getAttendeeState = createSelector(
  getEventState,
  state => state.attendees
);

export const getAttendees = createSelector(
  getAttendeeState,
  state => state.attendees
);
