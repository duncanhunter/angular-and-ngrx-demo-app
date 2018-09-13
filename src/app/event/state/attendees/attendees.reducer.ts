import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { AttendeesActions, AttendeesActionTypes } from './attendees.actions';
import { Attendee } from '../../../models';

export interface State extends EntityState<Attendee> {
  loading: boolean;
  error: any;
}

const adapter: EntityAdapter<Attendee> = createEntityAdapter<Attendee>();

export const intitalState: State = adapter.getInitialState({
  loading: false,
  error: null
});

export function reducer(state = intitalState, action: AttendeesActions): State {
  switch (action.type) {
    case AttendeesActionTypes.LoadAttendees: {
      return adapter.removeAll({
        ...state,
        loading: false,
        error: null
      });
    }

    case AttendeesActionTypes.LoadAttendeesSuccess: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        error: null
      });
    }

    case AttendeesActionTypes.LoadAttendeesFail: {
      return adapter.removeAll({
        ...state,
        loading: false,
        error: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
