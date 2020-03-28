import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameCtr: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(gameCtr){
    console.log("app.component gameCtr: ", gameCtr);
    this.gameCtr = gameCtr;
    if (this.gameCtr % 2 === 0){
      this.evenNumbers.push(this.gameCtr);
    } else{
      this.oddNumbers.push(this.gameCtr);
    }
  }
}
