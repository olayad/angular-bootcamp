import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  activeUsers;

  constructor(private userService: UserService){}

  onSetToInactive(id: number) {
    this.userService.statusUpdated.emit({currentStatus:'active', id: id});
  }

  ngOnInit(){
    this.activeUsers = this.userService.getActive();
  }


}
