import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // gameOn: boolean = false;
  gameInterval: number;
  gameCtr: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  onClickStart() {
    // this.gameOn = true;
    this.startGame()
  }

  onClickStop() {
    console.log('***Game stopped***');
    clearInterval(this.gameInterval);
  }

  startGame(): void {
    console.log('***Game started***');

      this.gameInterval = setInterval(() => {
        this.gameCtr ++;
        console.log("Counter: ", this.gameCtr);
      }, 1000);

  }
}
