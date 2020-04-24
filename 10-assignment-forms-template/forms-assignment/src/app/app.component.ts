import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  @ViewChild('signupForm') sgnForm: NgForm;

  selectedSubscription = 'Advanced';

  onSubmit(){
    console.log(`Form has been submitted!`);
    console.log(this.sgnForm.value);
  }

}
