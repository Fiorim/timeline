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
  @Output() percentageScrolled: EventEmitter<number> = new EventEmitter();
  Mode = Mode;
  scrollPosition: any;

  onScroll(HTMLEvent: any) {
    const { scrollHeight, offsetHeight } = HTMLEvent.target;
    const elementScrollSize = scrollHeight - offsetHeight;
    const scrollPercent = Math.round(
      (HTMLEvent.target.scrollTop / elementScrollSize) * 100
    );
    // console.log('scrollHeight', scrollHeight);
    // console.log('offsetHeight', offsetHeight);
    // console.log('elementScrollSize', elementScrollSize);
    // console.log('scrollIndex', scrollIndex);

    this.percentageScrolled.emit(scrollPercent);
  }
}
