import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventBookingComponent } from './pages/event-booking/event-booking.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyBookingComponent,
    NewEventComponent,
    EventListComponent,
    EventBookingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
