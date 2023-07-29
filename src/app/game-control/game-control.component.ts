import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  incNumber = 0;
  incInterval;
  @Output('incrementNum') incrementNum = new EventEmitter<number>();

  startGame() {
    this.incInterval = setInterval(() => {
      this.incrementNum.emit(this.incNumber + 1);
      this.incNumber += 1;
    }, 1000);
  }

  stopGame() {
    console.log('Game stopped at', this.incNumber);
    clearInterval(this.incInterval);
  }
}
