import { Action } from '@ngrx/store';
import { Attendee } from '../../../models';
export enum AttendeesActionTypes {
  LoadAttendees = '[Attendees Page] Load Attendees',
  LoadAttendeesSuccess = '[Attendees Page] Load Attendees Success',
  LoadAttendeesFail = '[Attendees Page] Load Attendees Fail',
  AddAttendee = '[Attendee Page] Add Attendee',
  AddAttendeeSuccess = '[Attendee API] Add Attendee Success',
  AddAttendeeFail = '[Attendee API] Add Attendee Fail',
  FilterBy = '[Attendee Page] FilterBy'
}
export class LoadAttendees implements Action {
  readonly type = AttendeesActionTypes.LoadAttendees;
}
export class LoadAttendeesSuccess implements Action {
  readonly type = AttendeesActionTypes.LoadAttendeesSuccess;
  constructor(public payload: Attendee[]) {}
}
export class LoadAttendeesFail implements Action {
  readonly type = AttendeesActionTypes.LoadAttendeesFail;
  constructor(public payload: any) {}
}

export class AddAttendee implements Action {
  readonly type = AttendeesActionTypes.AddAttendee;
  constructor(public payload: Attendee) {}
}

export class AddAttendeeSuccess implements Action {
  readonly type = AttendeesActionTypes.AddAttendeeSuccess;
  constructor(public payload: Attendee) {}
}

export class AddAttendeeFail implements Action {
  readonly type = AttendeesActionTypes.AddAttendeeFail;
  constructor(public payload: any) {}
}

export class FilterBy implements Action {
  readonly type = AttendeesActionTypes.FilterBy;
  constructor(public payload: string) {}
}

export type AttendeesActions =
  | FilterBy
  | AddAttendee
  | AddAttendeeSuccess
  | AddAttendeeFail
  | LoadAttendees
  | LoadAttendeesSuccess
  | LoadAttendeesFail;
