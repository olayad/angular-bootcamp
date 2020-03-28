import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameCtr: number;

  onIntervalFired(gameCtr){
    console.log("app.component gameCtr: ", gameCtr);
    this.gameCtr = gameCtr;
  }
}
