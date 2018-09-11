import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/containers/home/home.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StoreModule } from '@ngrx/store';

import { InMemoryDataService } from './app.db';
import { reducer } from './state/spinner/spinner.reducer';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'event', loadChildren: './event/event.module#EventModule' }
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }),
    StoreModule.forRoot({ spinner: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
