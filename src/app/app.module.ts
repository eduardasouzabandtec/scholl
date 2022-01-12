import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppIconComponent } from './components/app-icon/app-icon.component';
import { AppCardDayComponent } from './components/app-card-day/app-card-day.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCardComponent,
    AppIconComponent,
    AppCardDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
