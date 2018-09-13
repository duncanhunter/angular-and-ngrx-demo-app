import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { HomeComponent } from './home/containers/home/home.component';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './app.db';
import { reducer } from './state/spinner/spinner.reducer';
import { environment } from '../environments/environment.prod';

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
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      delay: 1000
    }),
    StoreModule.forRoot({ spinner: reducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
