import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductsFromDatabase().subscribe(product => this.products = product);
  }

  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe();
  }

  onUpdate(id: number) {
    this.router.navigateByUrl('/update/' + id);
  }
}
