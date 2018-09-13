import { Attendee } from '../../../models';
import { AttendeesActions, AttendeesActionTypes } from './attendees.actions';

export interface State {
  attendees: Attendee[];
  loading: boolean;
  error: any;
}

export const intitalState: State = {
  attendees: [],
  loading: false,
  error: null
};

export function reducer(state = intitalState, action: AttendeesActions): State {
  switch (action.type) {
    case AttendeesActionTypes.LoadAttendees: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case AttendeesActionTypes.LoadAttendeesSuccess: {
      return {
        ...state,
        loading: false,
        attendees: action.payload,
        error: null
      };
    }

    case AttendeesActionTypes.LoadAttendeesFail: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
