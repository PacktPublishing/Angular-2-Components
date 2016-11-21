//import { Directive, ElementRef, Renderer } from '@angular/core';
//
//@Directive({
//  selector: '[text-marker]'
//})
//export class TextMarker {
//  constructor(element: ElementRef, renderer: Renderer) {
//    renderer.setElementStyle(element.nativeElement, 'text-decoration', 'underline');
//}}

import {
  Directive,
  ElementRef,
  Renderer,
  Input,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[text-marker]'
})
export class TextMarker {  
  @Input('text-marker') 
  private color: string;
  
  constructor(private element: ElementRef, 
              private renderer: Renderer) {  }

  @HostListener('mouseenter')
  onEnter() {
    this.applyStyle(this.color, true);
  }

  @HostListener('mouseleave')
  onExit() {
    this.applyStyle('', false);
  }
  private applyStyle(color:string, mark:boolean) {    
    // apply underline
    this.renderer.setElementStyle(
      this.element.nativeElement,
      'text-decoration',
      mark ? 'underline' : '');

    // apply color
    this.renderer.setElementStyle(
      this.element.nativeElement,
      'color',
      color);
  }
}

