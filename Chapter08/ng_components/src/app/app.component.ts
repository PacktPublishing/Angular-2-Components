//import { Component } from '@angular/core'; 
//import 'expose?jQuery!jquery';
//import 'bootstrap';
//import * as $ from 'jquery';
//
//@Component({
//  selector: 'app-root',
//  template: `<h1>Angular2 components</h1>`
//})
//export class AppComponent {}


//import { Component, AfterViewInit } from '@angular/core';
//import 'expose?jQuery!jquery';
//import 'bootstrap';
//import * as $ from 'jquery';
//
//@Component({
//selector: 'app-root',
//template: `
//  <h1 data-toggle="tooltip"
//  data-placement="bottom"
//  title="A Tooltip on the right">Angular2 components</h1>
//`
//})
//export class AppComponent implements AfterViewInit {
//  ngAfterViewInit() {
//    $('h1').tooltip();
//  }
//}

//import { Component, AfterViewInit } from '@angular/core';
//import 'expose?jQuery!jquery';
//import 'bootstrap';
//import * as $ from 'jquery';
//
//@Component({
//selector: 'app-root',
//template: `
//  <input type="text" [(ngModel)]="title" placeholder="enter custom title..">
//  <h1 data-toggle="tooltip"
//    [title]="title"
//    data-placement="bottom"
//    >Angular2 components</h1>
//    <collapse></collapse>
//` 
//})
//export class AppComponent {}



import { Component, AfterViewInit } from '@angular/core';
import 'expose?jQuery!jquery';
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  template: `
    <h1 data-toggle="tooltip"
    data-placement="bottom"
    title="A tooltip on the right">Angular2 components</h1>
    <collapse></collapse>
  `     
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('h1').tooltip();
  }
}

