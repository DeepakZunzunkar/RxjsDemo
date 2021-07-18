import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router'
import { PromiseComponent } from './promise/promise.component';
import { ObervableComponent } from './obervable/obervable.component';
import { ListComponent } from './obervable/list/list.component';
import { FromEventComponent } from './obervable/from-event/from-event.component';
import { IntervalComponent } from './obervable/interval/interval.component';
import { OfAndFromComponent } from './obervable/of-and-from/of-and-from.component';
import { ToArrayComponent } from './obervable/to-array/to-array.component';
import { CustomObservableComponent } from './obervable/custom-observable/custom-observable.component';
import { MapComponent } from './obervable/map/map.component';
import { PluckComponent } from './obervable/pluck/pluck.component';

const appRoutes :Routes = [

  { path :"promise" , component:PromiseComponent },
  { path :"observable" , component:ObervableComponent,
    children : [
      
      // { path : 'list', component:ListComponent },
      { path : '', component:ListComponent },  //set default routes for observable
      { path : 'fromEvent', component: FromEventComponent },
      { path : 'interval', component: IntervalComponent },
      { path : 'of-from', component: OfAndFromComponent },
      { path : 'toArray', component: ToArrayComponent },
      { path: 'custom', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path : 'pluck', component: PluckComponent}


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