import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ProductUpdateComponent } from './admin/product/product-update/product-update.component';
import {ProductAddComponent} from './admin/product/product-add/product-add.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register/register.component';
import { AdminComponent } from './admin/admin.component';
import {CartComponent} from './cart/cart.component';
import {CustomerComponent} from './customer/customer.component';
// import {AuthService as AuthGuard from './services/auth-service';
import {AuthService} from './services/auth-service';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: CustomerComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'admin/products', component: AdminComponent,  canActivate: [AuthService] },
  { path: 'admin/product/add', component: ProductAddComponent, canActivate: [AuthService] },
  { path: 'admin/update/:productId', component: ProductUpdateComponent, canActivate: [AuthService] },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
