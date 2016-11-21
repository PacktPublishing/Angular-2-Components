//import { Component } from '@angular/core';
//
//@Component({
//  selector: 'child-component',
//  template: `
//    <h2>Content Header</h2>
//    <p *ngIf="flag">Toggleable Content</p>
//  `
//})
//export class ChildComponent {
//  private flag: boolean = false;
//  toggle() {
//    this.flag = !this.flag;
//  }
//}
//


//import { Component } from '@angular/core';

//@Component({
//  selector  : 'app-root',
//  template  : `          
//    <h1>Component Interactions</h1>
//    <button (click)="child.toggle()">Toggle Child</button>
//    <child-component #child></child-component>
//  `
//})
//export class AppComponent {}



//import {Component, ViewChild} from '@angular/core';
//
//@Component({
//  selector: 'child-component',
//  template: `
//    <h2>Content Header</h2>
//    <p *ngIf="flag">Toggleable Content</p>
//  `
//})
//export class ChildComponent {
// private flag: boolean = false;
//  toggle(){
//    this.flag = !this.flag;
//  }
//}



//@Component({
//  selector  : 'app-root',
//  template  : `          
//    <h1>Component Interactions</h1>
//    <button (click)="toggle()">Toggle Child</button>
//    <child-component></child-component>
//  `
//})
//export class AppComponent {
//  @ViewChild(ChildComponent)
//  private childComponent: ChildComponent;
//  toggle(){
//    this.childComponent.toggle();
//  }
//}



import { Component, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
    <h2>Content Header</h2>
    <p *ngIf="flag">Toggleable Content</p>
  `
}) 
export class ChildComponent {
  private flag: boolean = false;
  toggle(){
    this.flag = !this.flag;
  }
}

@Component({
  selector  : 'app-root',
  template  : `          
    <h1>Component Interactions</h1>
    <button (click)="toggle()">Toggle Child</button>
    <child-component></child-component>
    <child-component></child-component>
    <child-component></child-component> 
  `
})
export class AppComponent {
  @ViewChildren(ChildComponent)
  private children: QueryList<ChildComponent>;
  toggle(){
    this.children.forEach(child => child.toggle())
  }
}

