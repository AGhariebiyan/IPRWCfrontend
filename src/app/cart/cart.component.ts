import { Component, OnInit } from '@angular/core';
import {Cart} from '../models/cart.model';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];

  constructor(private cartService: CartService) {
    this.getCart();
  }

  ngOnInit() {
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

}
