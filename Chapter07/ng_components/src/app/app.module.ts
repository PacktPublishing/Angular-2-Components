//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { AppComponent } from './app.component';
//import { AccordionTab } from './components/accordion/accordion-tab';
//@NgModule({
//  declarations: [
//    AppComponent,
//    AccordionTab
//  ],
//  imports: [
//    BrowserModule,
//    FormsModule,
//    HttpModule
// ],
//  providers: [],
//  bootstrap: [AppComponent]
//})
//export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Accordion } from './components/accordion/accordion';
import { AccordionTab } from './components/accordion/accordion-tab';
import { UserInformation } from './components/user-info/user-info';

@NgModule({
  declarations: [
    AppComponent,
    Accordion, AccordionTab,
    UserInformation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
