import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  public product: Product;
  productAddForm: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();

    this.productAddForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
      'imageLink': new FormControl(null, Validators.required)
    });
  }

  getProduct() {
    this.productService.getProductById(this.activatedRoute.snapshot.params.productId).subscribe((product) => {
      this.product = product; console.log(product);
      this.productAddForm.patchValue({
        name: product.name,
        description: product.description,
        price: product.price,
        amount: product.amount,
        imageLink: product.image_link
      });
    });
  }

  onSubmit() {
    const name = this.productAddForm.value.name;
    const description = this.productAddForm.value.description;
    const price = this.productAddForm.value.price;
    const amount = this.productAddForm.value.amount;
    const imageLink = this.productAddForm.value.imageLink;

    const product = new Product(name, description, price, amount, imageLink);

    this.productService.updateProduct(this.activatedRoute.snapshot.params.productId, product).subscribe();
  }

}