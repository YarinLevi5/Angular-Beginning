import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  num = 0;

  increment() {
    this.num++;
  }
  decrement() {
    this.num <= 0 ? (this.num = 0) : this.num--;
  }
  constructor() {}
}
