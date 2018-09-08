import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventComponent } from './container/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EventComponent }
    ])
  ],
  declarations: [EventComponent]
})
export class EventModule { }
