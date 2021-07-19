import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObervableComponent } from './obervable/obervable.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './obervable/list/list.component';
import { FromEventComponent } from './obervable/from-event/from-event.component';
import { IntervalComponent } from './obervable/interval/interval.component';
import { OfAndFromComponent } from './obervable/of-and-from/of-and-from.component';
import { ToArrayComponent } from './obervable/to-array/to-array.component';
import { CustomObservableComponent } from './obervable/custom-observable/custom-observable.component';
import { MapComponent } from './obervable/map/map.component';
import { PluckComponent } from './obervable/pluck/pluck.component';
import { FilterComponent } from './obervable/filter/filter.component';

// const appRoutes :Routes = [

//   { path :"promise" , component:PromiseComponent },
//   { path :"observable" , component:ObervableComponent},
//   { path : '', redirectTo : '/promise' ,pathMatch :'full' },
// ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObervableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfAndFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
