import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, AfterViewChecked {
  @Input() nums: number[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    // console.log('(even)', this.gameCtr);

  }
}

