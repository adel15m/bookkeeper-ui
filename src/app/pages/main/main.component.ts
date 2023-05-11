import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  counter = 0;
  result: number = 0;
  list: string[] = [];

  constructor() {
    this.list.push("LOL0");
    this.list.push("LOL1");
    this.list.push("LOL2");
    this.list.push("LOL3");

  }

  addOne(): void {
    this.counter++;
  }
}
