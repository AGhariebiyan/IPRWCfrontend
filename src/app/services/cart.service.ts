import {Cart} from '../models/cart.model';

export class CartService {
  private cart: Cart[] = [];

  constructor() {}

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    const cartItem: Cart = {product};
    this.cart.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(this.cart));

    console.log(this.cart);
  }

  removeFromCart(id: number) {
    this.cart.splice(id, 1);

  }

}
