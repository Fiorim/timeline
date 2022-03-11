import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Event } from '../shared/event.model';
import { Mode } from '../shared/mode.enum';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  mode: Mode = Mode.Year;
  Mode = Mode;


  mockEvents: Event[] = [
    {
      id: 0,
      date: new Date('2018-1-1'),
      highlights: `First year highlights.`,
      type: Mode.Year,
      children: [
        {
          id: 10,
          date: new Date('2018-1-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
          children: [
            // {
            //   id: 100,
            //   date: new Date('2018-1-1'),
            //   highlights: `First day event.`,
            //   type: Mode.Day
            // },
            // {
            //   id: 101,
            //   date: new Date('2018-1-2'),
            //   highlights: `First day event.`,
            //   type: Mode.Day
            // },
            // {
            //   id: 102,
            //   date: new Date('2018-1-3'),
            //   highlights: `First day event.`,
            //   type: Mode.Day
            // },
            // {
            //   id: 103,
            //   date: new Date('2018-1-4'),
            //   highlights: `First day event.`,
            //   type: Mode.Day
            // },
            // {
            //   id: 104,
            //   date: new Date('2018-1-5'),
            //   highlights: `First day event.`,
            //   type: Mode.Day
            // },
          ]
        },
        {
          id: 11,
          date: new Date('2018-2-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
        },
        {
          id: 12,
          date: new Date('2018-3-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
        },
        {
          id: 13,
          date: new Date('2018-4-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
        },
        {
          id: 14,
          date: new Date('2018-5-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
        },
      ]
    },
    {
      id: 1,
      date: new Date('2019-1-1'),
      highlights: `Second year highlights.`,
      type: Mode.Year
    },
    {
      id: 2,
      date: new Date('2020-1-1'),
      highlights: `Third year highlights.`,
      type: Mode.Year
    },
    {
      id: 3,
      date: new Date('2021-1-1'),
      highlights: `4th year highlights.`,
      type: Mode.Year
    },
    {
      id: 4,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year
    },
  ];

  events: Event[] = [];

  selectedEvent: Event | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe((data) => {
      this.mode = data['mode'] as Mode;
      this.updateEventList();
    });
  }

  selectEvent(event:  Event) {
    debugger;
    this.mode = event.type +1;
    this.selectedEvent = event;
    this.updateEventList();
  }

  updateEventList() {
    if (this.selectedEvent) {
      this.events = this.selectedEvent.children || [];
    } else {
      this.events = this.mockEvents;
    }
  }
}
