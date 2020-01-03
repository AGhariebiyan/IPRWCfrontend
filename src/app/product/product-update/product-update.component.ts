import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  products: Product[] = [];
  productAddForm: FormGroup;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();

    this.productAddForm = new FormGroup({
      'name': new FormControl(null),
      'description': new FormControl(null),
      'price': new FormControl(null),
      'amount': new FormControl(null),
      'imageLink': new FormControl(null)
    });
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(product => this.products = product);
  }

  onSubmit() {
    const name = this.productAddForm.value.name;
    const description = this.productAddForm.value.description;
    const price = this.productAddForm.value.price;
    const amount = this.productAddForm.value.amount;
    const imageLink = this.productAddForm.value.imageLink;

    console.log(name + description + price + amount + imageLink);

    const product = new Product(name, description, price, amount, imageLink);

    this.productService.addProduct(product);
    // console.log(eachProduct)
  }

}
