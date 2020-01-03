import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent},
  { path: 'update', component: ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
