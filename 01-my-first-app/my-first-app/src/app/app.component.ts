import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName = "";
  hideNote = false;

  updateNoteStatus(){
    if (this.hideNote){
      this.hideNote = false;
    } else {
      this.hideNote = true;
    }
  }
}
