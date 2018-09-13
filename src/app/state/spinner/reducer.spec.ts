import { reducer } from './spinner.reducer';
import { StartSpinner } from './spinner.actions';

describe('Reducer: Spinner', () => {
  it('should have initial state of isOn false', () => {
    const expected = { isOn: false };
    const action = { type: 'foo' } as any;
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should have a isOn set to true', () => {
    const state = { isOn: false };
    const action = new StartSpinner();
    const expected = { isOn: true };
    expect(reducer(state, action)).toEqual(expected);
  });
});
