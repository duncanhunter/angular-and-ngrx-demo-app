import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jest-marbles';
import { Subject, of, Observable } from 'rxjs';

import { AttendeesEffects } from './attendees.effects';
import {
  LoadAttendees,
  LoadAttendeesSuccess,
  AttendeesActions
} from './attendees.actions';
import { Attendee } from '../../../models';
import { EventService } from '../../services/event.service';

describe(`Effect: Attendess`, () => {
  let actions: Observable<AttendeesActions>;
  let effects: AttendeesEffects;
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AttendeesEffects,
        provideMockActions(() => actions),
        {
          provide: EventService,
          useValue: {
            getAttendees: jest.fn()
          }
        }
      ]
    });

    service = TestBed.get(EventService);
    effects = TestBed.get(AttendeesEffects);
  });

  it('should work', () => {
    const fakeAttendees = [
      { name: 'Duncan', attending: false, guests: 0 } as Attendee
    ];
    const action = new LoadAttendees();
    const completion = new LoadAttendeesSuccess(fakeAttendees);

    jest
      .spyOn(service, 'getAttendees')
      .mockImplementation(() => of(fakeAttendees));
    actions = hot('--a-', { a: action });
    const expected = cold('--(b)', { b: completion });
    expect(effects.getAttendees$).toBeObservable(expected);
  });
});
