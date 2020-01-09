import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {Cart} from '../../models/cart.model';

@Component({
  selector: 'app-product-customer',
  templateUrl: './product-customer.component.html',
  styleUrls: ['./product-customer.component.css']
})
export class ProductCustomerComponent implements OnInit {
  products: Product[] = [];
  cart: Cart[] = [];

  constructor(private productService: ProductService,private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductsFromDatabase().subscribe(product => this.products = product);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product, 2);
  }

}
