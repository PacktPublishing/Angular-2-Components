//import { Directive } from '@angular/core';
//@Directive({
//  selector: '[onlyIf]'
//}) export class OnlyIf {
//}


//import {
//  Directive,
//  TemplateRef,
//  ViewContainerRef
//} from '@angular/core';
//@Directive({
//  selector: '[onlyIf]'
//})export class OnlyIf {
//  constructor(private _templateRef: TemplateRef,
//              private _viewContainerRef: ViewContainerRef)
//  {  }
//}


import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[onlyIf]'
})
export class OnlyIf {
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

@Input()
set onlyIf(condition:boolean) {
  if (condition) {
     this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
      this.viewContainer.clear();
    }
  }
}
