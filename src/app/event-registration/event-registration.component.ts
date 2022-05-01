import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss'],
})
export class EventRegistrationComponent implements OnInit {
  eventForm = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      date: new FormControl(new Date()),
      description: new FormControl(),
    });
  }

  registerEvent(event: any) {
    console.log(event);
  }
}
