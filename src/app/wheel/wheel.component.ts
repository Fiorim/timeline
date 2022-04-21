import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

import { ScrollService } from '../scroll.service';
import { EventBlock } from '../shared/event.model';
import { Mode } from '../shared/mode.enum';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss'],
})
export class WheelComponent implements OnChanges {
  @Input() eventList: EventBlock[] = [];
  @Input() outerScrollPercentage: number = 0;
  @Output() percentageScrolled: EventEmitter<number> = new EventEmitter();
  Mode = Mode;

  @ViewChild('eventRuler') eventRuler!: ElementRef;

  constructor(private scrollSvc: ScrollService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['outerScrollPercentage'] &&
      !changes['outerScrollPercentage'].firstChange
    ) {
      this.scroll(this.outerScrollPercentage);
    }
  }

  onScroll(event: Event) {
    this.percentageScrolled.emit(
      this.scrollSvc.getPercentageScrolled(event.target as HTMLElement)
    );
  }

  scroll(percentage: number) {
    const { nativeElement } = this.eventRuler;
    nativeElement.scroll({
      top: this.scrollSvc.calculateLenthToScroll(percentage, nativeElement),
    });
  }
}
