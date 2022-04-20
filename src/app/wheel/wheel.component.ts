import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Event } from '../shared/event.model';
import { Mode } from '../shared/mode.enum';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss'],
})
export class WheelComponent {
  @Input() eventList: Event[] = [];
  @Output() eventSelected: EventEmitter<number> = new EventEmitter();
  Mode = Mode;
  scrollPosition: any;

  selectEvent(eventIndex: number) {
    this.eventSelected.emit(eventIndex);
  }

  onScroll(e: any) {
    const scrollIndex = Math.floor(e.target.scrollTop / 3.6);
    // console.log(scrollIndex);
    this.selectEvent(scrollIndex);
  }
}
