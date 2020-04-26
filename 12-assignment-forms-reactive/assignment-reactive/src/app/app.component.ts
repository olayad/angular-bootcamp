import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment-reactive';
  myForm: FormGroup;
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl(null)
    });

  }

  onSubmit(){
    console.log(this.myForm);
    // this.myForm.reset();
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1){
      return {'nameisForbidden': true};
    }
    return null;
  }
}
