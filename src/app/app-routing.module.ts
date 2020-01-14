import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductUpdateComponent } from './admin/product/product-update/product-update.component';
import {ProductCustomerComponent} from './customer/product-customer/product-customer.component';
import {ProductAddComponent} from './admin/product/product-add/product-add.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register/register.component';
import { AdminComponent } from './admin/admin.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductCustomerComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'admin/products', component: AdminComponent },
  { path: 'admin/product/add', component: ProductAddComponent },
  { path: 'admin/update/:productId', component: ProductUpdateComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
