import {EventEmitter, Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {
  statusUpdated = new EventEmitter<{currentStatus: string, id: number}>();
  private activeUsers = ['Mospi', 'Carlos'];
  private inactiveUsers = ['Teye', 'Vic'];
  private activeToInactiveCtr = 0;
  private inactiveToActiveCtr = 0;

  constructor(){
      this.statusUpdated.subscribe(
      (user) => {
        if (user.currentStatus === 'active') {
          this.inactiveUsers.push(this.activeUsers[user.id]);
          this.activeUsers.splice(user.id, 1);
          this.activeToInactiveCtr++;
          console.log("change to inactive: " + user.currentStatus + " " + user.id + " ctr: " + this.activeToInactiveCtr);
        } else {
          this.activeUsers.push(this.inactiveUsers[user.id]);
          this.inactiveUsers.splice(user.id, 1);
          this.inactiveToActiveCtr++
          console.log('change to active: ' + user.currentStatus + ' ' + user.id + ' ctr: ', this.inactiveToActiveCtr);
        }
        return true;
      }
    );
  }

  getActive(){
    return this.activeUsers;
  }

  getInactive(){
    return this.inactiveUsers
  }
}
