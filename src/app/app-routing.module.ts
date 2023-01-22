import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './users/users.component';

const routes:Routes = [
  {
  component:ProductComponent,
  path:'product'
  },
  {
    component:ServicesComponent,
    path:'services'
    },
  {
  component: UsersComponent,
  path:'users'
  },
  {
  component:HomeComponent,
  path:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
