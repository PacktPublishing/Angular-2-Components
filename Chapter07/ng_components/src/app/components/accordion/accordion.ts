import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AccordionTab } from './accordion-tab';
import { UserInformation } from '../user-info/user-info'

@Component({
  selector: 'accordion',
  template: `
    <div>
      <button (click)="fetchData()">update data</button>
      <accordion-tab *ngFor="let user of users"
                     (toggle)="toggle(user)"
                     [extended]="isActive(user)"
                     [title]="user.name">
                    <user-info [user]="user"></user-info>
      </accordion-tab>
    </div>
  `
})
export class Accordion {

  users;
  activeUserId = 0;

  constructor(private http:Http) {
    this.http.get('/app/server/users.json')
        .map(result => result.json())
        .subscribe(result => this.users = result);
  }

  isActive(user){
    return user.id === this.activeUserId;
  }

  fetchData(){
    this.http.get('/app/server/other-users.json')
        .map(result => result.json())
        .subscribe(result => this.users = result);
  }

  toggle(user){
    this.isActive(user) ?
        this.activeUserId = 0 : this.activeUserId = user.id;
  }
}
