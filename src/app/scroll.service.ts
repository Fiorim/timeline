import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  getPercentageScrolled(element: HTMLElement): number {
    const scrollLength = element.scrollHeight - element.offsetHeight;
    return Math.round((element.scrollTop / scrollLength) * 100);
  }

  calculateLenthToScroll(percentage: number, element: HTMLElement): number {
    const scrollLength = element.scrollHeight - element.offsetHeight;
    return (percentage * scrollLength) / 100;
  }
}
