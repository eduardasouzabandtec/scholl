import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppIconComponent } from './components/app-icon/app-icon.component';
import { AppCardDayComponent } from './components/app-card-day/app-card-day.component';
import { AppCardTaskComponent } from './components/app-card-task/app-card-task.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppClassesComponent } from './components/app-classes/app-classes.component';


@NgModule({
  declarations: [
    AppComponent,
    AppCardTaskComponent,
    AppIconComponent,
    AppCardDayComponent,
    AppCardComponent,
    AppClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
