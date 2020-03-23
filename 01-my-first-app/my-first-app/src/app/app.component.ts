import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName = "";
  hideNote = false;
  log = [];

  updateNoteStatus(event){
    this.hideNote = !this.hideNote;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
    // console.log("timestamp:", event.timeStamp);
  }
}
