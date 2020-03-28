import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  gameInterval: number;
  gameCtr: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickStart() {
    console.log('***Game started***');
      this.gameInterval = setInterval(() => {
        this.gameCtr ++;
        console.log("game-control gameCtr: ", this.gameCtr);
        this.intervalFired.emit(this.gameCtr);
      }, 1000);
  }

  onClickStop() {
    console.log('***Game stopped***');
    clearInterval(this.gameInterval);
  }
}
