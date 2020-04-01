import {EventEmitter, Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {
  statusUpdated = new EventEmitter<{currentStatus: string, id: number}>();
  private activeUsers = ['Mospi', 'Carlos'];
  private inactiveUsers = ['Teye', 'Vic'];

  constructor(){
      this.statusUpdated.subscribe(
      (user) => {
        if (user.currentStatus === 'active') {
          console.log('change to inactive', user.currentStatus, user.id);
          this.inactiveUsers.push(this.activeUsers[user.id]);
          this.activeUsers.splice(user.id, 1);
        } else {
          console.log('change to active', user.currentStatus, user.id);
          this.activeUsers.push(this.inactiveUsers[user.id]);
          this.inactiveUsers.splice(user.id, 1);
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
