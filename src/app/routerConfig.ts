import {Routes}from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ErrorComponent} from './components/error/error.component';
import {Item1Component} from './components/dashboard/item1/item1.component';
import {Item2Component} from './components/dashboard/item2/item2.component';


export const appRoutes : Routes = [
{ path :'home',
 component: HomeComponent 
 },
 {
   path : '',
   component:AboutComponent
 },
 {
   path : 'dashboard',
   component:DashboardComponent,
   children:[{path:'item1',component:Item1Component},
   {path:'item2',component:Item2Component}
   ]
   
 },

 {
   path : '**' ,
   component : ErrorComponent 
 }
 
  ];

