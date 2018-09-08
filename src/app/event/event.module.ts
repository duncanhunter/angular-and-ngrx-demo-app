import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventComponent } from './container/event/event.component';
import { AddAttendeeComponent } from './components/add-attendee/add-attendee.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EventComponent }])
  ],
  declarations: [EventComponent, AddAttendeeComponent]
})
export class EventModule {}
