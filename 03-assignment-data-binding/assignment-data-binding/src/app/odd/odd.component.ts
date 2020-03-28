import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, AfterViewChecked {
  @Input() num: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
  }
}
