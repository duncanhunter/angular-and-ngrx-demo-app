import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './spinner.reducer';

export const getSpinnerState = createFeatureSelector<State>('spinner');

export const getSpinner = createSelector(
  getSpinnerState,
  (state: State) => state.isOn
);
