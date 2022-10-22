import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isButtonOn: boolean = true;
  title = 'test';
  count = 0;
  display = false;
  toggle() {
    this.display = !this.display;
    this.isButtonOn = !this.isButtonOn;
  }
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--
  }
}
