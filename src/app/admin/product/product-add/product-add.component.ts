import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  public product: Product;
  imageLinkLength = true;
  productAddForm: FormGroup;

  constructor(private productService: ProductService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productAddForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      imageLink: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const name = this.productAddForm.value.name;
    const description = this.productAddForm.value.description;
    const price = this.productAddForm.value.price;
    const amount = this.productAddForm.value.amount;
    const imageLink = this.productAddForm.value.imageLink;

    const product = new Product(name, description, price, amount, imageLink);

    if (imageLink.length <= 255) {
      this.productService.addProduct(product).subscribe( data => this.product = product);
      this.route.navigateByUrl('products');
    } else {
      this.imageLinkLength = false;
    }

  }

}
