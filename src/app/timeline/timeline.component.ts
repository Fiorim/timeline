import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

import { MockEvents } from '../../assets/mock-events';
import { Event } from '../shared/event.model';
import { Mode } from '../shared/mode.enum';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @ViewChild('test') section!: ElementRef;

  mode: Mode = Mode.Year;
  Mode = Mode;

  mockEvents: Event[] = MockEvents.mockEvents;

  events: Event[] = [];

  selectedEvent: Event | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe((data) => {
      this.mode = data['mode'] as Mode;
      this.updateEventList();
    });
  }

  selectEvent(event: Event) {
    if (event.type !== Mode.Day) {
      this.mode = event.type + 1;
      this.selectedEvent = event;
      this.updateEventList();
    }
  }

  updateEventList() {
    if (this.selectedEvent) {
      this.events = this.selectedEvent.children || [];
    } else {
      this.events = this.mockEvents;
      this.mode = Mode.Year;
    }
  }

  back() {
    this.selectedEvent = null;
    this.updateEventList();
  }

  showEvent(eventIndex: number) {
    this.section.nativeElement.scroll({
      // behavior: 'smooth',
      top: eventIndex * 44.02,
    });
  }

  onScroll(e: any) {
    // const scrollIndex = Math.floor(e.target.scrollTop);
    // console.log(scrollIndex);
    // // this.selectEvent(scrollIndex);
    // this.showEvent(2000); //4402
  }
}
