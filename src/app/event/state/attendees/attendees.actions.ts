import { Action } from '@ngrx/store';
import { Attendee } from '../../../models';
export enum AttendeesActionTypes {
  LoadAttendees = '[Attendees Page] Load Attendees',
  LoadAttendeesSuccess = '[Attendees Page] Load Attendees Success',
  LoadAttendeesFail = '[Attendees Page] Load Attendees Fail'
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
export type AttendeesActions =
  | LoadAttendees
  | LoadAttendeesSuccess
  | LoadAttendeesFail;
