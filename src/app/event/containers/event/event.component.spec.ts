import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../../services/event.service';
import { of } from 'rxjs';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let service: EventService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: null },
        {
          provide: EventService,
          useValue: {
            getAttendees: () => {}
          }
        }
      ],
      declarations: [EventComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    service = TestBed.get(EventService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of attendees set', () => {
    const fakeAttendees = [{ name: 'FAKE_NAME', attending: false, guests: 0 }];

    jest
      .spyOn(service, 'getAttendees')
      .mockImplementation(() => of(fakeAttendees));

    component.ngOnInit();

    component.attendees$.subscribe(attendees => {
      expect(attendees).toEqual(fakeAttendees);
    });
  });
});
