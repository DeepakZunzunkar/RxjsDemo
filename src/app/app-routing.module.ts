import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router'
import { PromiseComponent } from './promise/promise.component';
import { ObervableComponent } from './obervable/obervable.component';
import { ListComponent } from './obervable/list/list.component';
import { FromEventComponent } from './obervable/from-event/from-event.component';
import { IntervalComponent } from './obervable/interval/interval.component';

const appRoutes :Routes = [

  { path :"promise" , component:PromiseComponent },
  { path :"observable" , component:ObervableComponent,
    children : [
      
      // { path : 'list', component:ListComponent },
      { path : '', component:ListComponent },  //set default routes for observable
      { path : 'fromEvent', component: FromEventComponent },
      { path : 'interval', component: IntervalComponent }


  ]},
  { path :"**", redirectTo: 'observable'},
  // { path : '', redirectTo : '/promise' ,pathMatch :'full' }  
];

@NgModule({
    imports:[
      // CommonModule
      RouterModule.forRoot(appRoutes),
    ], 
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule{


}