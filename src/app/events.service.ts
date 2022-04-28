import { Injectable } from '@angular/core';

import { MockEvents } from '../assets/mock-events';
import { EventBlock } from './shared/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  mockEvents: EventBlock[] = MockEvents.mockEvents;

  getEvents(): EventBlock[] {
    return this.mockEvents;
  }
  constructor() {}
}
