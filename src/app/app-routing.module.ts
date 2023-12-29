import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { EventBookingComponent } from './pages/event-booking/event-booking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'my-bookings',
    component: MyBookingComponent,
  },
  {
    path: 'new-Event',
    component: NewEventComponent,
  },
  {
    path: 'event-bookings',
    component: EventBookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
