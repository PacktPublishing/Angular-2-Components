//import { Component, AfterViewInit } from '@angular/core';
//import * as $ from 'jquery';
//
//@Component({
//  selector: 'collapse',
//  templateUrl: './collapse.html'
//})
//export class Collapse implements AfterViewInit {
//  ngAfterViewInit() {
//    $('.collapse').collapse();
//  }
//}


//import { Component, Inject, ElementRef }  from '@angular/core';
//import * as $ from 'jquery';
//
//@Component({
//  selector: 'collapse',
//  templateUrl: './collapse.html'
//})
//export class Collapse {
//  constructor(element: ElementRef) {
//    $(element.nativeElement)
//    .on('show.bs.collapse', ()=> console.log('handle show event'));
//  
//    $(element.nativeElement)
//    .on('hide.bs.collapse', ()=> console.log('handle hide event'));
//  }
//}

import { Component, AfterViewInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'collapse',
  styleUrls: [ './collapse.css' ],
  templateUrl: './collapse.html'
})

export class Collapse implements AfterViewInit {
  constructor(element: ElementRef) {
    $(element.nativeElement)
    .on('show.bs.collapse', ()=> console.log('handle show event'));

    $(element.nativeElement)
    .on('hide.bs.collapse', ()=> console.log('handle hide event'));
  }

  ngAfterViewInit() {
    console.log('>> ', $('.collapse'));
    console.log('>> ', $('.collapse').collapse);
    $('.collapse').collapse();
  }
}

