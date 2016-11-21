import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
     <input type="text" [(ngModel)]="user.username">
     <input type="password" [(ngModel)]="user.password">
     
     <button (click)="sendUser()">Send</button>
  `
})
export class AppComponent {
  private user = {
    username: '',
    password: ''
  }
  sendUser(){
    console.log(this.user);
  }
}

