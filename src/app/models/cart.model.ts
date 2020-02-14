import {Product} from './product.model';

export class Cart {
  product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}
