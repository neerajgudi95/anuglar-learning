import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  counter: number = 0;

  countUserStatusChange() {
    this.counter++;
    console.log('A status was changed ', this.counter, ' times');
  }
}
