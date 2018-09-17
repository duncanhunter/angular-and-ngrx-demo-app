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
  fromAttendee.selectAll
);

export const getFilterBy = createSelector(
  getAttendeeState,
  state => state.filterBy
);

export const getFilteredAttendees = createSelector(
  getAttendees,
  getFilterBy,
  (attendees, filterBy) =>
    attendees.filter(
      attendee =>
        filterBy === 'all'
          ? true
          : filterBy === 'withGuests'
            ? attendee.guests >= 1
            : attendee.guests === 0
    )
);
