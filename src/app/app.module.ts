import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routerConfig';
import { HighlightDirective } from './highlight.directive';

import { ErrorComponent } from './components/error/error.component';
import { Item1Component } from './components/dashboard/item1/item1.component';

import {Item2Component} from './components/dashboard/item2/item2.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, DashboardComponent, HighlightDirective,  ErrorComponent, Item1Component,Item2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
