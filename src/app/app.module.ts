import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './users/users.component';

import {RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';


const appRoutes :Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    UsersComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
