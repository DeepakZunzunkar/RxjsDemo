import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObervableComponent } from './obervable/obervable.component';
import { AppRoutingModule } from './app-routing.module';

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
    ObervableComponent
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
