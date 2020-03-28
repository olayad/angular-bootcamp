import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firedNum: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(gameCtr){
    console.log("app.component gameCtr: ", gameCtr);
    this.firedNum = gameCtr;
    if (this.firedNum % 2 === 0){
      this.evenNumbers.push(this.firedNum);
    } else{
      this.oddNumbers.push(this.firedNum);
    }
    console.log('oddNumbers: ', this.oddNumbers);
    console.log('evenNumbers: ', this.evenNumbers)

  }
}
