import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router'
import { PromiseComponent } from './promise/promise.component';
import { ObervableComponent } from './obervable/obervable.component';

const appRoutes :Routes = [

  { path :"promise" , component:PromiseComponent },
  { path :"observable" , component:ObervableComponent},
  { path : '', redirectTo : '/promise' ,pathMatch :'full' }
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