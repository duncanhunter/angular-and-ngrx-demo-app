import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  StartSpinner = '[Spinner Page] Start Spinner',
  StopSpinner = '[Spinner Page] Stop Spinner'
}

export class StartSpinner implements Action {
  readonly type = SpinnerActionTypes.StartSpinner;
}

export class StopSpinner implements Action {
  readonly type = SpinnerActionTypes.StopSpinner;
}

export type SpinnerActions = StopSpinner | StartSpinner;
