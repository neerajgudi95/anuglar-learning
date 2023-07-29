import { Component } from '@angular/core';

// decorators are attached with @
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  intervalNum;
  
  intervalFired(num: number) {
    this.intervalNum = num;
  }
}
