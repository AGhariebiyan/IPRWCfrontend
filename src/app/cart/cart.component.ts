import { Component, OnInit } from '@angular/core';
import {Cart} from '../models/cart.model';
import {CartService} from '../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];

  constructor(public cartService: CartService, private route: Router) {
    this.getCart();
  }

  ngOnInit() {
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

  emptyCart() {
    this.cartService.emptyCart();
    this.route.navigateByUrl('products');
  }

}
