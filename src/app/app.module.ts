import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductAddComponent } from './admin/product/product-add/product-add.component';
import { ProductDeleteComponent } from './admin/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './admin/product/product-update/product-update.component';
import { ProductService } from './services/product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductCustomerComponent } from './customer/product-customer/product-customer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartService } from './services/cart.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NavbarComponent } from './navbar/navbar.component';
import {AuthService} from './services/auth-service';
import {ShortenPipe} from './pipes/shorten.pipe';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';

export function tokenGetter() {
  return localStorage.getItem('jwttoken');
}

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    AdminComponent,
    CartComponent,
    CustomerComponent,
    ProductCustomerComponent,
    ContactComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ShortenPipe,
    OrderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['']
      }
    }),
  ],
  providers: [
    ProductService,
    CartService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
