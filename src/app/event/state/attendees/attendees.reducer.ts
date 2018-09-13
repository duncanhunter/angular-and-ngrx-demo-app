import { Attendee } from '../../../models';
import { AttendeesActions, AttendeesActionTypes } from './attendees.actions';

export interface State {
  attendees: Attendee[];
  loading: boolean;
}

export const intitalState: State = {
  attendees: [],
  loading: false
};

export function reducer(state = intitalState, action: AttendeesActions): State {
  switch (action.type) {
    case AttendeesActionTypes.LoadAttendees:
      {
      }

      break;

    default: {
      return state;
    }
  }
}
