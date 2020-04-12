import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownSelection: string = "Select an option";
  stri: string = '';
  title = 'forms-assignment';

  onSelectedValue(selection){
    this.dropdownSelection = selection.target.innerText;

  }

}
