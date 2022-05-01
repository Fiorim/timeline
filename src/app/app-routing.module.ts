import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { Mode } from './shared/mode.enum';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'year' },
  { path: 'year', component: TimelineComponent, data: { mode: Mode.Year } },
  { path: 'month', component: TimelineComponent, data: { mode: Mode.Month } },
  { path: 'day', component: TimelineComponent, data: { mode: Mode.Day } },
  { path: 'new', component: EventRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
