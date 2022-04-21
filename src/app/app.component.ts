import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    renderer: Renderer2
  ) {
    renderer.addClass(this.document.body, 'dark-mode');
  }
}
