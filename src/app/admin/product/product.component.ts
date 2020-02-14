import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'
import { ProductService } from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductsFromDatabase().subscribe((product) => {
      this.products = product; });
  }

  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe( data => this.getProducts());
  }

  onUpdate(id: number) {
    this.router.navigateByUrl('admin/update/' + id);
  }

  routeToAddPage() {
    this.router.navigateByUrl('admin/product/add');
  }
}
