import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

import { EventsService } from '../events.service';
import { ScrollService } from '../scroll.service';
import { EventBlock } from '../shared/event.model';
import { Mode } from '../shared/mode.enum';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @ViewChild('eventList') eventList!: ElementRef;

  mode: Mode = Mode.Year;
  Mode = Mode;

  mockEvents: EventBlock[] = this.eventSvc.getEvents();

  events: EventBlock[] = [];

  selectedEvent: EventBlock | null = null;

  percentageScrolled: number = 0;

  constructor(
    private route: ActivatedRoute,
    private scrollSvc: ScrollService,
    private eventSvc: EventsService
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe((data) => {
      this.mode = data['mode'] as Mode;
      this.updateEventList();
    });
  }

  selectEvent(event: EventBlock) {
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

  scroll(percentage: number) {
    const { nativeElement } = this.eventList;
    nativeElement.scroll({
      top: this.scrollSvc.calculateLenthToScroll(percentage, nativeElement),
    });
  }

  onScroll(event: Event) {
    this.percentageScrolled = this.scrollSvc.getPercentageScrolled(
      event.target as HTMLElement
    );
  }
}
