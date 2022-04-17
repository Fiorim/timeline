import { Component, Input, OnInit } from '@angular/core';

import { Event } from '../shared/event.model';
import { Mode } from '../shared/mode.enum';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss'],
})
export class WheelComponent implements OnInit {
  @Input() eventList: Event[] = [];
  Mode = Mode;

  constructor() {}

  ngOnInit(): void {}
}
