//import { Component } from '@angular/core';
//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//export class AppComponent {
//  title = 'app works!';
//}



//import { Component } from '@angular/core';
//@Component({
//  selector: 'app-root',
//  template: `<h1 text-marker >Angular2 components</h1>`
//}) 
//export class AppComponent {}


//import { Component }  from '@angular/core';
//@Component({
// selector: 'app-root',
//  template: `<h1 text-marker="red">Angular2 components</h1>`
//}) 
//export class AppComponent {}


import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <h1 text-marker="red">Angular2 components</h1>
    <input type="checkbox" [(ngModel)]="condition">
    <p *onlyIf="condition">
      This content will shown only if the condition is true
    </p>
  `
})
export class AppComponent {
  title = 'app works!';
}

