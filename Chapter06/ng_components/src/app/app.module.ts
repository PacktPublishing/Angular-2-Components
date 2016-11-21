//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { AppComponent } from './app.component';
//
//@NgModule({
//  declarations: [
//    AppComponent
//  ],
//  imports: [
//    BrowserModule,
//    FormsModule,
//    HttpModule
//  ],
//  providers: [],
//  bootstrap: [AppComponent]
//})
//export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent, ChildComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

